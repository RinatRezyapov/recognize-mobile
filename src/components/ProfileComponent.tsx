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

  const data = useLazyLoadQuery(graphql`
    query ProfileComponentQuery($id: String) {
      user(id: $id) {
        id,
        username, 
        email,
        courses {
          edges {
            node {
              _id,
              title
              description
              body
            }
          }
        }
      }
    }
  `, { id: "1" }, { fetchKey: isFocused + route.key, fetchPolicy: 'network-only' });

  return (
    <View style={styles.container}>
      <View style={styles.personalInfo}>
        <Image source={require("./profile-pic.png")} style={styles.profileImg} />
        <View>
          <Text style={styles.username}>{data.user.username}</Text>
          <Text style={styles.email}>{data.user.email}</Text>
        </View>
      </View>
      <CoursesComponent courses={data.user.courses.edges} navigation={navigation} />
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
