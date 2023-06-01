import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import {mutationWithClientMutationId} from 'graphql-relay';
import {addUser, getUserByEmail} from '../../database';

const AddUserMutation = mutationWithClientMutationId({
  name: 'AddUser',
  inputFields: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    username: {type: new GraphQLNonNull(GraphQLString)},
  },
  outputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({user}): string => user.id,
    },
  },
  mutateAndGetPayload: async ({email, username}, {pgPool}) => {
    const user = await getUserByEmail(email, pgPool);
    if (user) {
      return {user};
    } else {
      const user = await addUser(email, username, pgPool);
      return {user};
    }
  },
});

export {AddUserMutation};
