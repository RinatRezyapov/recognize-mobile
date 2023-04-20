import {useCallback} from 'react';
import {ConnectionHandler, graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation RemoveCourseMutation($input: RemoveCourseInput!) {
    removeCourse(input: $input) {
      deletedCourseId
    }
  }
`;

export const useRemoveCourseMutation = (userId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (courseId: string) => {
      commit({
        variables: {
          input: {
            id: courseId,
          },
        },
        updater: store => {
          if (!userId) return;
          const payload = store.get(userId);
          if (!payload) return;

          const removedEdgeID = store.getRootField('removeCourse')?.getValue('deletedCourseId');
          if (!removedEdgeID) return;

          const connection = ConnectionHandler.getConnection(payload, 'Courses_courses');
          if (!connection) return;

          ConnectionHandler.deleteNode(connection, removedEdgeID?.toString());
        },
      });
    },
    [commit, userId],
  );
};
