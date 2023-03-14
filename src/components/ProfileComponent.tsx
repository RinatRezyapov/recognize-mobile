import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql, loadQuery } from 'react-relay';
import RelayEnvironment from '../RelayEnvironment';

import { NavigationType } from './App';
import CoursesComponent from './CoursesComponent';
import ProfileInfo from './ProfileInfo';

interface IProps extends NavigationType<'Profile'> {

}

export const ProfileComponentQuery = graphql`
  query ProfileComponentQuery($id: String) {
    user(id: $id) {
      id,
      _id,
      username, 
      email,
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
  ProfileComponentQuery,
  { id: '1' },
);



const ProfileComponent: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>{"Loading..."}</Text>}>
        <ProfileInfo initialQueryRef={initialQueryRef} />
        <CoursesComponent initialQueryRef={initialQueryRef} navigation={navigation} />
      </Suspense>
    </View>
  );
}

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

export default ProfileComponent;
