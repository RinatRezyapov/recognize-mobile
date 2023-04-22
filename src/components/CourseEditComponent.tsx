import React from 'react';
import {ActivityIndicator} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NavigationType} from '../App';
import NewCourseForm, {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';
import {useUpdateCourseMutation} from '../mutations/UpdateCourseMutation';
import {FormMode} from '../types/forms';
import {CourseEditComponent_course$key} from './__generated__/CourseEditComponent_course.graphql';

interface IProps extends NavigationType<'Course'> {}

const CourseEditComponent: React.FC<IProps> = ({navigation, route}) => {
  const course = useFragment<CourseEditComponent_course$key>(
    graphql`
      fragment CourseEditComponent_course on Course {
        id
        _id
        title
        description
        body
        avatar
      }
    `,
    route.params.courseRef,
  );
  const commitUpdateCourseMutation = useUpdateCourseMutation(course.id);

  const onSubmit = async (fields: NewCourseFormFields) => {
    commitUpdateCourseMutation(fields);
    navigation.navigate('Profile');
  };

  if (!course) return <ActivityIndicator size="large" />;

  const title = course.title;
  const description = course.description;
  const avatar = course.avatar;
  const words = course.body?.split(' ').map(value => ({value}));

  return (
    <NewCourseForm mode={FormMode.update} defaultValues={{title, description, avatar, words}} onSubmit={onSubmit} />
  );
};

export default CourseEditComponent;
