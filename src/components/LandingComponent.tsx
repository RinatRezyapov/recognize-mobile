import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationType } from '../../App';
import {
  graphql, loadQuery, usePreloadedQuery, useLazyLoadQuery
} from "react-relay/hooks";
import RelayEnvironment from '../RelayEnvironment';
import { LandingPageQuery } from '../pages/LandingPage';
import CoursesComponent from './CoursesComponent';

interface IProps {
  navigation: any;
  preloadedQuery: any;
}

const LandingComponent: React.FC<IProps> = ({ preloadedQuery, navigation }) => {
  const data = useLazyLoadQuery<any>(graphql`
  query LandingComponentQuery($id: String) {
    user(id: $id) {
      id,
      username, 
      email,
      courses {
        edges {
          node {
            id
            title
            body
          }
        }
      }
    }
  }
`, { id: '1' });
  console.log(JSON.stringify(data.user.courses.edges));
  return (
    <View style={styles.container}>
      <View style={styles.personalInfo}>
        <Image source={{ uri: "https://pbs.twimg.com/profile_images/1617475263163518976/Vapz9HQa_400x400.jpg" }} style={styles.profileImg} />
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

export default LandingComponent;
