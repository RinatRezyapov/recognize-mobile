import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import { NavigationType } from '../../App';
import CanvasComponent from './CanvasComponent';
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
`, { id: "1" }, { fetchKey: isFocused + route.key });

  const [draw, setDraw] = useState(false);

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

      <CanvasComponent>
        <Button title='Draw' />
      </CanvasComponent>
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
