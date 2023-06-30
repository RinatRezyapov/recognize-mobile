import styled from '@emotion/native';
import React from 'react';
import {ActivityIndicator, Button, FlatList, TouchableOpacity} from 'react-native';
import {graphql, usePaginationFragment} from 'react-relay';

import {CoursesQuery$data as CoursesQueryDataType} from '../queries/__generated__/CoursesQuery.graphql';
import {UserQuery$data as UserQueryType$data} from '../queries/__generated__/UserQuery.graphql';
import {
  CoursesPaginationQuery as CoursesPaginationQueryType,
  CoursesPaginationQuery$data as CoursesPaginationQueryDataType,
} from '../components/__generated__/CoursesPaginationQuery.graphql';
import CourseCardComponent from './CourseCardComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {RouteProp} from '@react-navigation/native';

const CoursesComponentFragment = graphql`
  fragment CoursesComponent on Query @refetchable(queryName: "CoursesPaginationQuery") {
    courses(first: $count, after: $cursor) @connection(key: "CoursesComponent_query_courses") {
      edges {
        node {
          id
          _id
          authorId
          author
          title
          description
          avatar
          likes
          ...CourseComponent_course
          ...CoursePlayerComponent_course
        }
      }
    }
  }
`;

interface IProps {
  route: RouteProp<RootStackParamList, 'Courses'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Courses'>;
  courses: CoursesQueryDataType;
  user: UserQueryType$data;
}

const CoursesComponent: React.FC<IProps> = ({navigation, route, user, courses}) => {
  const {
    data: paginatedData,
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment<CoursesPaginationQueryType, CoursesPaginationQueryDataType>(
    CoursesComponentFragment,
    courses,
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.node?.id}
        onPress={() => navigation.navigate('Course', {course: item?.node, user: user})}>
        <CourseCardComponent user={user} course={item?.node} />
      </TouchableOpacity>
    );
  };
  console.log('hasNext', hasNext);
  return (
    <Wrapper>
      <FlatList
        data={paginatedData?.courses?.edges?.filter(v => v?.node?.authorId !== route.params.userId)}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        onEndReached={() => {
          loadNext(7);
        }}
      />
    </Wrapper>
  );
};

export default CoursesComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
`;
