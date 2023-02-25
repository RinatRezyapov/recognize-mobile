import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import CoursesComponent from './src/components/CoursesComponent';
import CourseComponent from './src/components/CourseComponent';
import CoursePlayerComponent from './src/components/CoursePlayerComponent';
import CourseEditComponent from './src/components/CourseEditComponent';
import CourseCreateComponent from './src/components/CourseCreateComponent';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Courses: undefined;
  Course: { id: string };
  CourseCreate: undefined;
  CourseEdit: { id: string };
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
        <Stack.Screen name="CoursePlayer" component={CoursePlayerComponent} options={{ title: 'Course Player' }} />
        <Stack.Screen name="CourseCreate" component={CourseCreateComponent}  options={{ title: 'New Course' }} />
        <Stack.Screen name="CourseEdit" component={CourseEditComponent}  options={{ title: 'Edit Course' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
