import { GraphQLString } from 'graphql';
import { getUser } from '../../database';
import { GraphQLUser } from '../nodes';

const UserQuery = {
  type: GraphQLUser,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }, { pgPool }) => {
    return getUser(id, pgPool);
  }
}


export { UserQuery };

