import {GraphQLID, GraphQLInt, GraphQLNonNull} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {addStreak, getCourseStreaks, getStreak, updateStreak} from '../../database';
import {GraphQLStreakEdge} from '../nodes';

const AddStreakMutation = mutationWithClientMutationId({
  name: 'AddStreak',
  inputFields: {
    userId: {type: new GraphQLNonNull(GraphQLID)},
    courseId: {type: new GraphQLNonNull(GraphQLID)},
    streak: {type: new GraphQLNonNull(GraphQLInt)},
    interval: {type: new GraphQLNonNull(GraphQLInt)},
    wordsCount: {type: new GraphQLNonNull(GraphQLInt)},
  },
  outputFields: {
    streakEdge: {
      type: new GraphQLNonNull(GraphQLStreakEdge),
      resolve: async ({userId, courseId}, {}, {pgPool}) => {
        const streak = await getStreak(userId, courseId, pgPool);
        const streaks = await getCourseStreaks(courseId, pgPool);

        return {
          cursor: cursorForObjectInConnection([...streaks], streak),
          node: streak,
        };
      },
    },
  },
  mutateAndGetPayload: async ({userId, courseId, streak, interval, wordsCount}, {pgPool}) => {
    const localUserId = fromGlobalId(userId).id;
    const localCourseId = fromGlobalId(courseId).id;

    const oldScoreData = await getStreak(localUserId, localCourseId, pgPool);

    if (!oldScoreData) {
      await addStreak(localUserId, localCourseId, streak, interval, wordsCount, pgPool);
    } else if (oldScoreData.streak < streak) {
      await updateStreak(localUserId, localCourseId, streak, interval, wordsCount, pgPool);
    }

    return {userId: localUserId, courseId: localCourseId};
  },
});

export {AddStreakMutation};
