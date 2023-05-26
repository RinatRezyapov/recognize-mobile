import {GraphQLFloat, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {addScore, getCourseScores, getScore, updateScore} from '../../database';
import {GraphQLScoreEdge} from '../nodes';

const AddScoreMutation = mutationWithClientMutationId({
  name: 'AddScore',
  inputFields: {
    userId: {type: new GraphQLNonNull(GraphQLID)},
    courseId: {type: new GraphQLNonNull(GraphQLID)},
    score: {type: new GraphQLNonNull(GraphQLFloat)},
    sequence: {type: new GraphQLNonNull(GraphQLString)},
    interval: {type: new GraphQLNonNull(GraphQLInt)},
    wordsCount: {type: new GraphQLNonNull(GraphQLInt)},
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
  mutateAndGetPayload: async ({userId, courseId, score, sequence, interval, wordsCount}, {pgPool}) => {
    const localUserId = fromGlobalId(userId).id;
    const localCourseId = fromGlobalId(courseId).id;

    const oldScoreData = await getScore(localUserId, localCourseId, pgPool);

    if (!oldScoreData) {
      await addScore(localUserId, localCourseId, score, sequence, interval, wordsCount, pgPool);
    } else if (oldScoreData.score > score) {
      await updateScore(localUserId, localCourseId, score, sequence, interval, wordsCount, pgPool);
    }

    return {userId: localUserId, courseId: localCourseId};
  },
});

export {AddScoreMutation};
