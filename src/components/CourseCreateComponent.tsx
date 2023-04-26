import React from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';

import NewCourseForm, {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';
import {useAddCourseMutation} from '../mutations/AddCourseMutation';
import {FormMode} from '../types/forms';
import {CourseCreateComponentQuery as CourseCreateComponentQueryType} from './__generated__/CourseCreateComponentQuery.graphql';
import {UserQuery} from '../queries/User';

interface IProps {
  initialQueryRef: any;
  navigation: any;
  route: any;
}

const CourseCreateComponent: React.FC<IProps> = ({navigation, route}) => {
  const {user} = useLazyLoadQuery<CourseCreateComponentQueryType>(UserQuery, {id: route.params.id});
  const commitAddCourseMutation = useAddCourseMutation(user?.id);

  const onSubmit = async (fields: NewCourseFormFields) => {
    commitAddCourseMutation(fields);
    navigation.navigate('Profile');
  };

  return <NewCourseForm mode={FormMode.create} onSubmit={onSubmit} />;
};

export default CourseCreateComponent;
