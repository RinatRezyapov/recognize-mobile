import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import { NavigationType } from '../../App';
import CoursesComponent from './CoursesComponent';

interface IProps extends NavigationType<'Profile'> {

}

const ProfileComponent: React.FC<IProps> = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const { user } = useLazyLoadQuery(graphql`
  query ProfileComponentQuery($id: String) {
    user(id: $id) {
      id,
      username, 
      email,
      courses {
        edges {
          node {
            id
            title
            description
            body
          }
        }
      }
    }
  }
`, { id: "1" }, { fetchPolicy: 'network-only', fetchKey: isFocused + route.key });
  return (
    <View style={styles.container}>
      <View style={styles.personalInfo}>
        <Image source={{ uri: "https://pbs.twimg.com/profile_images/1617475263163518976/Vapz9HQa_400x400.jpg" }} style={styles.profileImg} />
        <View>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <CoursesComponent courses={user.courses.edges} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#a04bfa',
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
    borderColor: 'white'
  },
  username: {
    fontSize: 24,
    color: 'white'
  },
  email: {
    fontSize: 12,
    color: 'white'
  }
});

export default ProfileComponent;
