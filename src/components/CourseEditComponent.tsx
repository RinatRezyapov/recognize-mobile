import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ConnectionHandler, graphql, useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';
import { FormMode } from '../types/forms';
import { NavigationType } from './App';

interface IProps extends NavigationType<'Course'> {

}

const CourseEditComponent: React.FC<IProps> = ({ navigation, route }) => {
  const user = useFragment(
    graphql`
      fragment CourseEditComponent_user on User {
        id
        _id
        username
      }
    `,
    route.params.userRef,
  );

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
      updater: (store) => {
        const payload = store.get(user.id);
        if (payload == null) {
          return;
        }
        console.log('updater', payload, store.getRootField('updateCourse'))
        const updatedEdge = store.getRootField('updateCourse')?.getLinkedRecord('courseEdge');
        if (!updatedEdge) return;

        const connection = ConnectionHandler.getConnection(
          payload,
          'Courses_courses',
        );

        // if (!connection) return;
        // ConnectionHandler.update(store, );
      },
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
