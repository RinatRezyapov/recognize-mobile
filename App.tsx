import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import CoursesComponent from './src/components/CoursesComponent';
import CourseComponent from './src/components/CourseComponent';
import NewCourseForm from './src/forms/NewCourseForm';
import CoursePlayerComponent from './src/components/CoursePlayerComponent';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Courses: undefined;
  NewCourse: undefined;
  Course: { id: string };
  CoursePlayer: { id: string };
};

export type NavigationType<T> = NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Courses">
        <Stack.Screen
          name="Courses"
          component={CoursesComponent}
          options={{ title: 'Courses' }}
        />
        <Stack.Screen name="Course" component={CourseComponent} />
        <Stack.Screen name="CoursePlayer" component={CoursePlayerComponent} />
        <Stack.Screen name="NewCourse" component={NewCourseForm}  options={{ title: 'New Course' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
