import React from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NavigationType} from '../App';
import ProfileComponent from '../components/ProfileComponent';

export const ProfilePageQuery = graphql`
  query ProfilePageQuery($id: String) {
    user(id: $id) {
      id
      _id
      username
      email
      ...CoursePlayerComponent_user
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            id
            _id
            title
            description
            body
            avatar
            authorId
            ...CourseComponent_course
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
          }
        }
      }
    }
  }
`;

interface IProps extends NavigationType<'Profile'> {}

const ProfilePage: React.FC<IProps> = ({navigation, route}) => {
  const data = useLazyLoadQuery(ProfilePageQuery, {id: route.params?.userId});

  return <ProfileComponent userId={route.params?.userId} navigation={navigation} data={data} />;
};

export default ProfilePage;
