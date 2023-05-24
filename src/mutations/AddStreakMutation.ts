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
          streak
        }
      }
    }
  }
`;

export const useAddStreakMutation = (userId?: string, courseId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (streak: number) => {
      commit({
        variables: {
          input: {
            userId,
            courseId,
            streak,
          },
        },
        updater: store => {
          if (!courseId) return;
          const payload = store.get(courseId);
          if (payload == null) return;
          const newEdge = store.getRootField('addStreak')?.getLinkedRecord('streakEdge');
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
