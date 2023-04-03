import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { NavigationType } from '../App';
import ProfileComponent from '../components/ProfileComponent';

interface IProps extends NavigationType<'Profile'> {

}

export const ProfilePageQuery = graphql`
  query ProfilePageQuery($id: String) {
    user(id: $id) {
      id
      _id
      username,
      email
      ...CourseComponent_user
      ...CourseEditComponent_user
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
`

const ProfilePage: React.FC<IProps> = ({ navigation, route }) => {

  const data = useLazyLoadQuery(ProfilePageQuery, { id: route.params?.id });

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <ProfileComponent userId={route.params?.id} navigation={navigation} data={data} />
    </View>
  );
}

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
    backgroundColor: 'white',
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 4,

  },
  username: {
    fontSize: 24,

  },
  email: {
    fontSize: 12,

  }
});

