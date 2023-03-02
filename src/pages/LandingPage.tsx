import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationType } from '../../App';
import {
    graphql, loadQuery, RelayEnvironmentProvider, usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from '../RelayEnvironment';
import LandingComponent from '../components/LandingComponent';

export const LandingPageQuery = graphql`
  query LandingPageQuery($id: String) {
    user(id: $id) {
      id,
      username, 
      email,
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, LandingPageQuery, {
  id: "1",
});


interface IProps extends NavigationType<'Courses'> {

}

const LandingPage: React.FC<IProps> = ({ navigation }) => {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <React.Suspense fallback={<Text>Loading...</Text>}>
                <LandingComponent preloadedQuery={preloadedQuery} navigation={navigation} />
            </React.Suspense>
        </RelayEnvironmentProvider>
    );
}


export default LandingPage;
