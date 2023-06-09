import {GraphQLString} from 'graphql';
import {getUserByEmail, getUser} from '../../database';
import {GraphQLUser} from '../nodes';

const UserQuery = {
  type: GraphQLUser,
  args: {
    id: {type: GraphQLString},
    email: {type: GraphQLString},
  },
  resolve: (_, {id, email}, {pgPool}) => {
    if (email) {
      return getUserByEmail(email, pgPool);
    }
    return getUser(id, pgPool);
  },
};

export {UserQuery};
