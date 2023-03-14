import React from 'react';
import { ActivityIndicator } from 'react-native';
import { graphql, useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { NavigationType } from './App';
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';

interface IProps extends NavigationType<'Course'> {

}

const CourseEditComponent: React.FC<IProps> = ({ navigation, route }) => {
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
          id: course._id,
          title: fields.title,
          description: fields.description,
          body: fields.data,
        }
      }
    })
    navigation.navigate('Profile');
  }

  if (!course) return <ActivityIndicator size="large" />;

  const title = course.title;
  const description = course.description;
  const data = course.body;

  return <NewCourseForm defaultValues={{ title, description, data }} onSubmit={onSubmit} />;
}

export default CourseEditComponent;
