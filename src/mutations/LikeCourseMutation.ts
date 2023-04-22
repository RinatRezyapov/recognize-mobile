import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';

const mutation = graphql`
  mutation LikeCourseMutation($input: LikeCourseInput!) {
    likeCourse(input: $input) {
      courseEdge {
        node {
          id
          _id
          title
          body
          description
          authorId
          createdAt
          updatedAt
          likes
          avatar
        }
      }
    }
  }
`;

export const useLikeCourseMutation = (userId?: string, courseId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (remove: boolean) => {
      commit({
        variables: {
          input: {
            user_id: userId,
            course_id: courseId,
            remove,
          },
        },
      });
    },
    [commit, userId, courseId],
  );
};
