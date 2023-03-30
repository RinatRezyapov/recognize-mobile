import styled from '@emotion/native';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import { CoursesComponentQuery as CoursesComponentQueryType } from './__generated__/CoursesComponentQuery.graphql';

interface IProps {
  initialQueryRef: any;
  navigation: any;
}

const CoursesComponentQuery = graphql`
  query CoursesComponentQuery($id: String) {
    user(id: $id) {
      id
      _id
      ...CourseComponent_user
      ...CourseEditComponent_user
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
            likes
            ...CourseComponent_course
          }
        }
      }
    }
  }
`

const CoursesComponent: React.FC<IProps> = ({ navigation }) => {

  const data = useLazyLoadQuery<CoursesComponentQueryType>(CoursesComponentQuery, { id: "ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce" });

  return (
    <Wrapper>
      <ScrollView>
        {data?.courses?.courses?.edges?.map((edge) => {
          return (
            <TouchableOpacity
              key={edge?.node?.id}
              onPress={() => navigation.navigate('Course', { id: edge?.node?._id, courseRef: edge?.node, userRef: data.user })}
            >
              <CourseCardComponent
                user={data.user}
                course={edge?.node}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </Wrapper>
  );
}

export default CoursesComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
`;