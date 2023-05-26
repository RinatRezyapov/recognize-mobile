import {GraphQLInt} from 'graphql';
import {getAllScores, getAllScoresWhere} from '../../database';
import {GraphQLScores} from '../nodes';

const ScoresQuery = {
  type: GraphQLScores,
  args: {
    interval: {type: GraphQLInt},
    wordsCount: {type: GraphQLInt},
  },
  resolve: (root, {interval, wordsCount}, {pgPool}) => {
    return {interval, wordsCount};
  },
};

export {ScoresQuery};
