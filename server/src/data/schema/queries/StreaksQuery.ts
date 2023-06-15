import {getAllStreaks} from '../../database';
import GraphQLStreaks from '../nodes/Streaks';

const StreaksQuery = {
  type: GraphQLStreaks,
  resolve: (root, {id}, {pgPool}) => {
    return getAllStreaks(pgPool);
  },
};

export {StreaksQuery};
