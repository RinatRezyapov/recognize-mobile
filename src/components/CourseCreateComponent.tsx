import React from 'react';
import {useLazyLoadQuery} from 'react-relay';

import NewCourseForm, {IFormFields as NewCourseFormFields} from '../forms/NewCourseForm';
import {useAddCourseMutation} from '../mutations/AddCourseMutation';
import {UserQuery} from '../queries/User';
import {FormMode} from '../types/forms';
import {CourseCreateComponentQuery as CourseCreateComponentQueryType} from './__generated__/CourseCreateComponentQuery.graphql';
import {NavigationType} from '../App';

interface IProps extends NavigationType<'CourseCreate'> {}

const CourseCreateComponent: React.FC<IProps> = ({navigation, route}) => {
  const {user} = useLazyLoadQuery<CourseCreateComponentQueryType>(UserQuery, {id: route?.params?.userId});
  const commitAddCourseMutation = useAddCourseMutation(user?.id);

  const onSubmit = async (fields: NewCourseFormFields) => {
    commitAddCourseMutation(fields);
    navigation.navigate('Profile', {userId: route?.params?.userId});
  };

  return <NewCourseForm mode={FormMode.create} onSubmit={onSubmit} />;
};

export default CourseCreateComponent;
