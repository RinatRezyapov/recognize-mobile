import {useCallback} from 'react';
import {graphql, useMutation} from 'react-relay';
import {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';

const mutation = graphql`
  mutation UpdateCourseMutation($input: UpdateCourseInput!) {
    updateCourse(input: $input) {
      courseEdge {
        node {
          id
          _id
          title
          description
          body
        }
      }
    }
  }
`;

export const useUpdateCourseMutation = (courseId?: string) => {
  const [commit] = useMutation(mutation);

  return useCallback(
    (fields: NewCourseFormFields) => {
      commit({
        variables: {
          input: {
            id: courseId,
            title: fields.title,
            description: fields.description,
            body: fields.words.map(v => v.value).join(' '),
          },
        },
      });
    },
    [commit, courseId],
  );
};
