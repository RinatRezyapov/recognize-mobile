import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation AddScoreMutation($input: AddScoreInput!) {
    addScore(input: $input) {
      scoreEdge {
        node {
          id
          _id
          userId
          courseId
          username
          value
        }
      }
    }
  }
`;

export const useAddScoreMutation = (userId?: string, courseId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (score: number) => {
      commit({
        variables: {
          input: {
            userId,
            courseId,
            score,
          },
        },
      });
    },
    [commit, userId, courseId],
  );
};
