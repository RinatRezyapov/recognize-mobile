import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ConnectionHandler, graphql, useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';
import { FormMode } from '../types/forms';
import { NavigationType } from './App';

export const UserQuery = graphql`
  query CourseCreateComponentQuery($id: String) {
    user(id: $id) {
      id,
      _id,
      username, 
      email,
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            __id
            id
            title
            description
            body
          }
        }
      }
    }
  }
`

interface IProps extends NavigationType<'Course'> {

}

const CourseEditComponent: React.FC<IProps> = ({ navigation, route }) => {
  const { user } = useLazyLoadQuery(UserQuery, { id: '1' });
  const course = useFragment(
    graphql`
      fragment CourseEditComponent_course on Course {
        title
        description
        body
      }
    `,
    route.params.courseRef,
  );

  const mutation = graphql`
  mutation CourseEditComponentMutation($input: UpdateCourseInput!) {
    updateCourse(input: $input) {
      courseEdge {
        title,
      }
    }
  }
  `;
  const [mutate] = useMutation(mutation);
  const onSubmit = async (fields: NewCourseFormFields) => {
    mutate({
      variables: {
        input: {
          id: course.id,
          title: fields.title,
          description: fields.description,
          body: fields.data,
        }
      },
      // updater: (store) => {
      //   const payload = store.get(user.id);
      //   if (payload == null) {
      //     return;
      //   }
      //   const newEdge = store.getRootField('updateCourse')?.getLinkedRecord('courseEdge');
      //   if (!newEdge) return;
      //   const connection = ConnectionHandler.getConnection(
      //     payload,
      //     'Courses_courses',
      //   );
      //   if (!connection) return;
      //   ConnectionHandler.update(store, );
      // },
    })
    navigation.navigate('Courses');
  }

  if (!course) return <ActivityIndicator size="large" />;

  const title = course.title;
  const description = course.description;
  const data = course.body;

  return <NewCourseForm mode={FormMode.update} defaultValues={{ title, description, data }} onSubmit={onSubmit} />;
}

export default CourseEditComponent;
