import React from 'react';
import { ConnectionHandler, graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { NavigationType } from '../../App';
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';

export const CourseCreateComponentQuery = graphql`
  query CourseCreateComponentQuery($id: String) {
    user(id: $id) {
      id,
      userId,
      username, 
      email,
      courses {
        edges {
          node {
            id
            title
            description
            body
          }
        }
      }
    }
  }
`;

interface IProps extends NavigationType<'Course'> {

}

const CourseCreateComponent: React.FC<IProps> = ({ navigation, route }) => {

  const { user } = useLazyLoadQuery<any>(CourseCreateComponentQuery, { id: "1" });
  const mutation = graphql`
  mutation CourseCreateComponentMutation($input: AddCourseInput!) {
    addCourse(input: $input) {
      courseEdge {
        title,
        authorId
      }
      user {
        username
      }
    }
  }
`;
  const [mutate] = useMutation(mutation);
  const onSubmit = async (fields: NewCourseFormFields) => {
    mutate({
      variables: {
        input: {
          authorId: user.userId,
          title: fields.title,
          description: fields.description,
          body: fields.data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      updater: (store) => {
        const payload = store.get('courses');
        console.log(payload)
      },
    })
    navigation.navigate('Profile');
  }

  return <NewCourseForm onSubmit={onSubmit} />;
}

export default CourseCreateComponent;
