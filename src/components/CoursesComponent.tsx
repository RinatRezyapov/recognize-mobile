import styled from '@emotion/native';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import {CoursesComponentQuery as CoursesComponentQueryType} from './__generated__/CoursesComponentQuery.graphql';
import {NavigationType} from '../App';
import {UserQuery} from '../queries/User';

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const CoursesComponent: React.FC<IProps> = ({navigation, route}) => {
  const data = useLazyLoadQuery<CoursesComponentQueryType>(UserQuery, {id: route.params.userId});

  return (
    <Wrapper>
      <ScrollView>
        {data?.courses?.courses?.edges
          ?.filter(v => v?.node?.authorId !== route.params.userId)
          ?.map(edge => {
            return (
              <TouchableOpacity
                key={edge?.node?.id}
                onPress={() => navigation.navigate('Course', {courseRef: edge?.node, userRef: data.user})}>
                <CourseCardComponent user={data.user} course={edge?.node} />
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
  background-color: white;
  height: 100%;
`;
