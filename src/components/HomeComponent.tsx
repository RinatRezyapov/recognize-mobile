import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationType } from './App';
import CoursesComponent from './CoursesComponent';
import ProfileComponent from './ProfileComponent';

interface IProps extends NavigationType<'Profile'> {

}

const Tab = createBottomTabNavigator();

const HomeComponent: React.FC<IProps> = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" component={ProfileComponent} />
      <Tab.Screen name="Courses" component={CoursesComponent} />
    </Tab.Navigator>
  );
}

export default HomeComponent;
