import styled from '@emotion/native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {graphql, useLazyLoadQuery, usePaginationFragment} from 'react-relay';

import {NavigationType} from '../App';
import CourseCardComponent from './CourseCardComponent';
import {CoursesQuery} from '../queries/Courses';
import {UserQuery} from '../queries/User';
import {CoursesQuery as CoursesQueryType} from '../queries/__generated__/CoursesQuery.graphql';
import {UserQuery as UserQueryType} from '../queries/__generated__/UserQuery.graphql';
import CoursesComponent from './CoursesComponent';

interface IProps extends NavigationType<'Courses'> {}

const CoursesPage: React.FC<IProps> = ({navigation, route}) => {
  const courses = useLazyLoadQuery<CoursesQueryType>(CoursesQuery, {});
  const user = useLazyLoadQuery<UserQueryType>(UserQuery, {id: route.params.userId});

  return <CoursesComponent route={route} navigation={navigation} courses={courses} user={user} />;
};

export default CoursesPage;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
`;
