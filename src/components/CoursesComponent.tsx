import styled from '@emotion/native';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import {CoursesComponentQuery as CoursesComponentQueryType} from './__generated__/CoursesComponentQuery.graphql';
import {NavigationType} from '../App';

const CoursesComponentQuery = graphql`
  query CoursesComponentQuery($id: String) {
    user(id: $id) {
      id
      _id
      ...CourseComponent_user
      ...CoursePlayerComponent_user
    }
    courses {
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            id
            _id
            title
            description
            body
            authorId
            author
            likes
            avatar
            ...CourseComponent_course
            ...CoursePlayerComponent_course
          }
        }
      }
    }
  }
`;

interface IProps extends NavigationType<'Profile'> {
  initialQueryRef: any;
}

const CoursesComponent: React.FC<IProps> = ({navigation, route}) => {
  const data = useLazyLoadQuery<CoursesComponentQueryType>(CoursesComponentQuery, {id: route.params.userId});

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
