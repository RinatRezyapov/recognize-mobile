import {GraphQLString} from 'graphql';
import {getUserByEmail, getUser} from '../../database';
import GraphQLUser from '../nodes/User';

const UserQuery = {
  type: GraphQLUser,
  args: {
    id: {type: GraphQLString},
    email: {type: GraphQLString},
  },
  resolve: async (_, {id, email}, {pgPool}) => {
    if (email) {
      const user = await getUserByEmail(email, pgPool);
      return user;
    }
    return getUser(id, pgPool);
  },
};

export {UserQuery};
