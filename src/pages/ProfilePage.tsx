import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationType } from '../../App';
import {
  graphql, loadQuery, RelayEnvironmentProvider, usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from '../RelayEnvironment';
import ProfileComponent from '../components/ProfileComponent';
import { useIsFocused } from '@react-navigation/native';

export const ProfilePageQuery = graphql`
  query ProfilePageQuery($id: String) {
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
`;

const preloadedQuery = loadQuery(RelayEnvironment, ProfilePageQuery, {
  id: "1",
});


interface IProps extends NavigationType<'Courses'> {

}

const ProfilePage: React.FC<IProps> = ({ navigation, route }) => {
  const isFocused = useIsFocused();

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>

      <ProfileComponent navigation={navigation} route={route} />

    </RelayEnvironmentProvider>
  );
}


export default ProfilePage;
