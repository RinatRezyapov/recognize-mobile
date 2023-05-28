import styled from '@emotion/native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';

import {NavigationType} from '../App';
import CourseCardComponent from './CourseCardComponent';
import {CoursesQuery} from '../queries/Courses';
import {UserQuery} from '../queries/User';
import {CoursesQuery as CoursesQueryType} from '../queries/__generated__/CoursesQuery.graphql';
import {UserQuery as UserQueryType} from '../queries/__generated__/UserQuery.graphql';

interface IProps extends NavigationType<'Courses'> {}

const CoursesComponent: React.FC<IProps> = ({navigation, route}) => {
  const courses = useLazyLoadQuery<CoursesQueryType>(CoursesQuery, {});
  const user = useLazyLoadQuery<UserQueryType>(UserQuery, {id: route.params.userId});

  return (
    <Wrapper>
      <ScrollView>
        {courses?.courses?.data?.edges
          ?.filter(v => v?.node?.authorId !== route.params.userId)
          ?.map(edge => {
            return (
              <TouchableOpacity
                key={edge?.node?.id}
                onPress={() => navigation.navigate('Course', {courseRef: edge?.node, userRef: user.user})}>
                <CourseCardComponent user={user.user} course={edge?.node} />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </Wrapper>
  );
};

export default CoursesComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
`;
