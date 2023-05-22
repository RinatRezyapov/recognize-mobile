import {getAllStreaks} from '../../database';
import {GraphQLStreaks} from '../nodes';

const StreaksQuery = {
  type: GraphQLStreaks,
  resolve: (root, {id}, {pgPool}) => {
    return getAllStreaks(pgPool);
  },
};

export {StreaksQuery};
