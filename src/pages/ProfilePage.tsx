import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql, loadQuery } from 'react-relay';
import RelayEnvironment from '../RelayEnvironment';
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
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            id
            _id
            title
            description
            body
            ...CourseComponent_course
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
            
          }
        }
      }
    }
  }
`

const initialQueryRef = loadQuery(
  RelayEnvironment,
  ProfilePageQuery,
  { id: '1' },
);

const ProfilePage: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>{"Loading..."}</Text>}>
        <ProfileComponent navigation={navigation} initialQueryRef={initialQueryRef} />
      </Suspense>
    </View>
  );
}

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
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

