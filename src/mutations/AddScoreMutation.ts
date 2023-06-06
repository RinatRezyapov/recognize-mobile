import {useCallback} from 'react';
import {ConnectionHandler, graphql, useMutation} from 'react-relay';

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
          score
          sequence
        }
      }
    }
  }
`;

export const useAddScoreMutation = (userId?: string, courseId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (score: number, sequence: string, interval: number, wordsCount: number, update?: boolean) => {
      commit({
        variables: {
          input: {
            userId,
            courseId,
            score,
            sequence,
            interval,
            wordsCount,
            update,
          },
        },
        updater: store => {
          if (update) return;
          if (!courseId) return;
          const payload = store.get(courseId);
          if (payload == null) return;
          const newEdge = store.getRootField('addScore')?.getLinkedRecord('scoreEdge');
          if (!newEdge) return;
          const connection = ConnectionHandler.getConnection(payload, 'Scores_scores');
          if (!connection) return;
          ConnectionHandler.insertEdgeAfter(connection, newEdge, null);
        },
      });
    },
    [commit, userId, courseId],
  );
};
