import {GraphQLInt} from 'graphql';
import {getAllScores, getAllScoresWhere} from '../../database';
import GraphQLScores from '../nodes/Scores';

const ScoresQuery = {
  type: GraphQLScores,
  args: {
    interval: {type: GraphQLInt},
    wordsCount: {type: GraphQLInt},
  },
  resolve: async (root, {interval, wordsCount}, {pgPool}) => {
    if (wordsCount !== undefined && interval !== undefined) {
      return await getAllScoresWhere(wordsCount, interval, pgPool);
    } else {
      return await getAllScores(pgPool);
    }
  },
};

export {ScoresQuery};
