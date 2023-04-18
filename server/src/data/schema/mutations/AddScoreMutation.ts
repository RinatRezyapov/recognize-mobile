import {GraphQLFloat, GraphQLID, GraphQLNonNull} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {addScore, getCourseScores, getScore, updateScore} from '../../database';
import {GraphQLCourseEdge} from '../nodes';

const AddScoreMutation = mutationWithClientMutationId({
  name: 'AddScore',
  inputFields: {
    user_id: {type: new GraphQLNonNull(GraphQLID)},
    course_id: {type: new GraphQLNonNull(GraphQLID)},
    score: {type: new GraphQLNonNull(GraphQLFloat)},
  },
  outputFields: {
    scoreEdge: {
      type: new GraphQLNonNull(GraphQLCourseEdge),
      resolve: async ({user_id, course_id}, {}, {pgPool}) => {
        const score = await getScore(user_id, course_id, pgPool);
        const scores = await getCourseScores(course_id, pgPool);
        return {
          cursor: cursorForObjectInConnection([...scores], score),
          node: score,
        };
      },
    },
  },
  mutateAndGetPayload: async ({user_id, course_id, score}, {pgPool}) => {
    const localUserId = fromGlobalId(user_id).id;
    const localCourseId = fromGlobalId(course_id).id;
    const oldScoreData = await getScore(localUserId, localCourseId, pgPool);

    if (!oldScoreData) {
      await addScore(localUserId, localCourseId, score, pgPool);
    } else if (oldScoreData.score > score) {
      await updateScore(localUserId, localCourseId, score, pgPool);
    }

    return {user_id: localUserId, course_id: localCourseId};
  },
});

export {AddScoreMutation};
