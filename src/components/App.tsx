import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RelayEnvironmentProvider
} from "react-relay/hooks";
import RelayEnvironment from '../RelayEnvironment';
import CanvasProvider from '../utils/context/CanvasProvider';
import CourseComponent from './CourseComponent';
import CourseCreateComponent from './CourseCreateComponent';
import CourseEditComponent from './CourseEditComponent';
import CoursePlayerComponent from './CoursePlayerComponent';
import HomeComponent from './HomeComponent';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Profile: undefined;
  Course: { id: string };
  CourseCreate: undefined;
  CourseEdit: { id: string };
  CoursePlayer: { id: string };
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {

  return (
    <CanvasProvider>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeComponent} options={{ title: 'Home', headerShown: false }} />
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
