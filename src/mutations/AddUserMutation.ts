import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation AddUserMutation($input: AddUserInput!) {
    addUser(input: $input) {
      addedUserId
    }
  }
`;

export const useAddUserMutation = () => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (email?: string, username?: string) => {
      console.log('useAddUserMutation', email, username);
      commit({
        variables: {
          input: {
            email,
            username,
          },
        },
      });
    },
    [commit],
  );
};
