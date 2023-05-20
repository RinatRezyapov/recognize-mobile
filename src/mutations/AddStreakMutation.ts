import {useCallback} from 'react';
import {ConnectionHandler, graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation AddStreakMutation($input: AddStreakInput!) {
    addStreak(input: $input) {
      streakEdge {
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

export const useAddStreakMutation = (userId?: string, courseId?: string) => {
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
        updater: store => {
          if (!courseId) return;
          const payload = store.get(courseId);
          if (payload == null) return;
          const newEdge = store.getRootField('addSstreak')?.getLinkedRecord('streakEdge');
          if (!newEdge) return;
          const connection = ConnectionHandler.getConnection(payload, 'Streaks_streaks');
          if (!connection) return;
          ConnectionHandler.insertEdgeAfter(connection, newEdge, null);
        },
      });
    },
    [commit, userId, courseId],
  );
};
