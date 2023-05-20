import {GraphQLID, GraphQLInt, GraphQLNonNull} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {addStreak, getCourseScores, getScore, updateStreak} from '../../database';
import {GraphQLScoreEdge} from '../nodes';

const AddStreakMutation = mutationWithClientMutationId({
  name: 'AddStreak',
  inputFields: {
    userId: {type: new GraphQLNonNull(GraphQLID)},
    courseId: {type: new GraphQLNonNull(GraphQLID)},
    streak: {type: new GraphQLNonNull(GraphQLInt)},
  },
  outputFields: {
    scoreEdge: {
      type: new GraphQLNonNull(GraphQLScoreEdge),
      resolve: async ({userId, courseId}, {}, {pgPool}) => {
        const score = await getScore(userId, courseId, pgPool);
        const scores = await getCourseScores(courseId, pgPool);

        return {
          cursor: cursorForObjectInConnection([...scores], score),
          node: score,
        };
      },
    },
  },
  mutateAndGetPayload: async ({userId, courseId, streak}, {pgPool}) => {
    const localUserId = fromGlobalId(userId).id;
    const localCourseId = fromGlobalId(courseId).id;

    const oldScoreData = await getScore(localUserId, localCourseId, pgPool);

    if (!oldScoreData) {
      await addStreak(localUserId, localCourseId, streak, pgPool);
    } else if (oldScoreData.streak < streak) {
      await updateStreak(localUserId, localCourseId, streak, pgPool);
    }

    return {userId: localUserId, courseId: localCourseId};
  },
});

export {AddStreakMutation};
