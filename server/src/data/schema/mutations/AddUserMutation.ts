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
    addedUserId: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({addedUser}, {}, {pgPool}): string => addedUser.id,
    },
  },
  mutateAndGetPayload: async ({email, username}, {pgPool}) => {
    const user = getUserByEmail(email, pgPool);
    console.log('AddUserMutation', user);
    if (!user) {
      const addedUser = await addUser(email, username, pgPool);
      return {addedUser};
    }

    return {};
  },
});

export {AddUserMutation};
