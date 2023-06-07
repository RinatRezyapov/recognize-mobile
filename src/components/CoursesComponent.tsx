import styled from '@emotion/native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {graphql, usePaginationFragment} from 'react-relay';

import {CoursesQuery$data as CoursesQueryType$data} from '../queries/__generated__/CoursesQuery.graphql';
import {UserQuery$data as UserQueryType$data} from '../queries/__generated__/UserQuery.graphql';
import CourseCardComponent from './CourseCardComponent';

const CoursesComponentFragment = graphql`
  fragment CoursesComponent on Query @refetchable(queryName: "CoursesPaginationQuery") {
    courses {
      data(first: $count, after: $cursor) @connection(key: "CoursesComponent_data") {
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
  }
`;

interface IProps {
  route: any;
  navigation: any;
  courses: CoursesQueryType$data;
  user: UserQueryType$data;
}

const CoursesComponent: React.FC<IProps> = ({navigation, route, user, courses}) => {
  const {data: paginatedData, loadNext, hasNext} = usePaginationFragment(CoursesComponentFragment, courses);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item?.node?.id}
        onPress={() => navigation.navigate('Course', {courseRef: item?.node, userRef: user})}>
        <CourseCardComponent user={user} course={item?.node} />
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper>
      <FlatList
        data={paginatedData.courses.data.edges?.filter(v => v?.node?.authorId !== route.params.userId)}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        onEndReached={() => {
          if (hasNext) {
            loadNext(1); // Load next page with count 1
          }
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
