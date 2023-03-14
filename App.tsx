import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RelayEnvironmentProvider
} from "react-relay/hooks";
import CourseComponent from './src/components/CourseComponent';
import CourseCreatePage from './src/components/CourseCreatePage';
import CourseEditComponent from './src/components/CourseEditComponent';
import CoursePlayerComponent from './src/components/CoursePlayerComponent';
import CoursesComponent from './src/components/CoursesComponent';
import ProfileComponent from './src/components/ProfileComponent';
import RelayEnvironment from './src/RelayEnvironment';
import CanvasProvider from './src/utils/context/CanvasProvider';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Profile: undefined,
  Courses: undefined;
  Course: { id: string, courseRef: any, };
  CourseCreate: undefined;
  CourseEdit: { id: string, courseRef: any };
  CoursePlayer: { id: string, courseRef: any };
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  
  return (
    <CanvasProvider>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
              name="Profile"
              component={ProfileComponent}
              options={{ title: 'Profile' }}
            />
            <Stack.Screen
              name="Courses"
              component={CoursesComponent}
              options={{ title: 'Courses' }}
            />
            <Stack.Screen name="Course" component={CourseComponent} options={{ title: 'Course' }} />
            <Stack.Screen name="CoursePlayer" component={CoursePlayerComponent} options={{ title: 'Course Player' }} />
            <Stack.Screen name="CourseCreate" component={CourseCreatePage} options={{ title: 'New Course' }} />
            <Stack.Screen name="CourseEdit" component={CourseEditComponent} options={{ title: 'Edit Course' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </RelayEnvironmentProvider>
    </CanvasProvider>
  );
}


export default App;
