import {useCallback, useContext} from 'react';
import {ConnectionHandler, graphql, useMutation} from 'react-relay';
import {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';
import {SnackbarContext} from '../utils/context/SnackbarProvider';
import {AddCourseMutation} from './__generated__/AddCourseMutation.graphql';

const mutation = graphql`
  mutation AddCourseMutation($input: AddCourseInput!) {
    addCourse(input: $input) {
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
        }
      }
      errors
    }
  }
`;

export const useAddCourseMutation = (userId?: string) => {
  const [commit] = useMutation<AddCourseMutation>(mutation);
  const {openSnackbar} = useContext(SnackbarContext);

  return useCallback(
    (fields: NewCourseFormFields) => {
      if (!userId) return;
      commit({
        variables: {
          input: {
            authorId: userId,
            title: fields.title,
            description: fields.description,
            body: fields.words.map(v => v.value).join(' '),
            avatar: fields.avatar,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
        updater: store => {
          if (!userId) return;
          const payload = store.get(userId);
          if (payload == null) {
            return;
          }
          const newEdge = store.getRootField('addCourse')?.getLinkedRecord('courseEdge');
          if (!newEdge) return;
          const connection = ConnectionHandler.getConnection(payload, 'Courses_courses');
          if (!connection) return;
          ConnectionHandler.insertEdgeAfter(connection, newEdge, null);
        },
        onCompleted: res => {
          const errors = res?.addCourse?.errors;
          if (Array.isArray(errors) && errors?.length > 0) {
            openSnackbar(errors.join(', '));
          }
        },
        onError: error => {
          console.log('Mutation failed with error:', error);
        },
      });
    },
    [commit, userId],
  );
};
