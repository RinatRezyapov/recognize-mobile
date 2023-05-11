import {getAllScores} from '../../database';
import {GraphQLScores} from '../nodes';

const ScoresQuery = {
  type: GraphQLScores,
  resolve: (root, {id}, {pgPool}) => {
    return getAllScores(pgPool);
  },
};

export {ScoresQuery};
