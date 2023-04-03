import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RelayEnvironmentProvider
} from "react-relay/hooks";
import RelayEnvironment from './RelayEnvironment';
import CanvasProvider from './utils/context/CanvasProvider';
import CourseComponent from './components/CourseComponent';
import CourseCreateComponent from './components/CourseCreateComponent';
import CourseEditComponent from './components/CourseEditComponent';
import CoursePlayerComponent from './components/CoursePlayerComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import styled from '@emotion/native';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Profile: undefined;
  Course: { id: string, userRef: any, courseRef: any };
  CourseCreate: undefined;
  CourseEdit: { id: string, courseRef: any, userRef: any };
  CoursePlayer: { id: string, courseRef: any };
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {

  return (
    <CanvasProvider>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Course" component={CourseComponent} options={{ title: 'Course' }} />
            <Stack.Screen name="CoursePlayer" component={CoursePlayerComponent} options={{ title: 'Course Player' }} />
            <Stack.Screen name="CourseCreate" component={CourseCreateComponent} options={{ title: 'New Course' }} />
            <Stack.Screen name="CourseEdit" component={CourseEditComponent} options={{ title: 'Edit Course' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </RelayEnvironmentProvider>
    </CanvasProvider>
  );
}


export default App;