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
        }
      }
    }
  }
`;

interface IProps {
  route: any;
  navigation: any;
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
        onPress={() => navigation.navigate('Course', {courseRef: item?.node, userRef: user})}>
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
