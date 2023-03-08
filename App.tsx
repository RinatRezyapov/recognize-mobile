import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RelayEnvironmentProvider
} from "react-relay/hooks";
import CourseComponent from './src/components/CourseComponent';
import CourseCreateComponent from './src/components/CourseCreateComponent';
import CourseEditComponent from './src/components/CourseEditComponent';
import CoursePlayerComponent from './src/components/CoursePlayerComponent';
import CoursesComponent from './src/components/CoursesComponent';
import RelayEnvironment from './src/RelayEnvironment';
import { navigationTheme } from './src/utils/theme';
import ProfileComponent from './src/components/ProfileComponent';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Profile: undefined,
  Courses: undefined;
  Course: { id: string };
  CourseCreate: undefined;
  CourseEdit: { id: string };
  CoursePlayer: { id: string };
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen
            name="Profile"
            component={ProfileComponent}
            options={{ title: 'Profile', ...navigationTheme }}
          />
          <Stack.Screen
            name="Courses"
            component={CoursesComponent}
            options={{ title: 'Courses', ...navigationTheme }}
          />
          <Stack.Screen name="Course" component={CourseComponent} options={{ title: 'Course', ...navigationTheme }} />
          <Stack.Screen name="CoursePlayer" component={CoursePlayerComponent} options={{ title: 'Course Player' }} />
          <Stack.Screen name="CourseCreate" component={CourseCreateComponent} options={{ title: 'New Course' }} />
          <Stack.Screen name="CourseEdit" component={CourseEditComponent} options={{ title: 'Edit Course' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}


export default App;
