import React from 'react';
import { ActivityIndicator } from 'react-native';
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { NavigationType } from '../../App';
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';

interface IProps extends NavigationType<'Course'> {

}

const CourseEditComponent: React.FC<IProps> = ({ navigation, route }) => {

  const { course } = useLazyLoadQuery<any>(graphql`
    query CourseEditComponentQuery($id: Int) {
      course(id: $id) {
        _id,
        title,
        description,
        body,
      }
    }
  `, { id: route.params.id });

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
