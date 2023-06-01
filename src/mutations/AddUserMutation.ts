import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation AddUserMutation($input: AddUserInput!) {
    addUser(input: $input) {
      id
    }
  }
`;

export const useAddUserMutation = () => {
  const [commit] = useMutation(mutation);

  return useCallback(
    async (email?: string, username?: string, callback?: (userId: string) => void) => {
      commit({
        variables: {
          input: {
            email,
            username,
          },
        },
        onCompleted: response => {
          console.log('onCompleted', response);
          callback?.(response?.addUser?.id);
        },
      });
    },
    [commit],
  );
};
