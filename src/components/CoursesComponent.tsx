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

  const renderItem = ({node}) => {
    return (
      <TouchableOpacity key={node?.id} onPress={() => navigation.navigate('Course', {courseRef: node, userRef: user})}>
        <CourseCardComponent user={user} course={node} />
      </TouchableOpacity>
    );
  };

  if (isLoadingNext) return <ActivityIndicator size="small" />;

  return (
    <Wrapper>
      {paginatedData?.courses?.edges
        ?.filter(v => v?.node?.authorId !== route.params.userId)
        .map(v => renderItem(v))
        .slice(-2)}
      <Button title="Load" onPress={() => loadNext(2)} />
    </Wrapper>
  );
};

export default CoursesComponent;

const Wrapper = styled.View`
  padding: 32px 16px;
  height: 100%;
`;
