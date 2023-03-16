import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationType } from './App';
import CoursesComponent from './CoursesComponent';
import ProfileComponent from './ProfileComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps extends NavigationType<'Profile'> {

}

const Tab = createBottomTabNavigator();

const HomeComponent: React.FC<IProps> = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" component={ProfileComponent} options={{ tabBarIcon: ({ focused }) => <Icon name="user" size={30} color={focused ? "lightblue" : "grey"} /> }} />
      <Tab.Screen name="Courses" component={CoursesComponent} options={{ tabBarIcon: ({ focused }) => <Icon name="th-list" size={30} color={focused ? "lightblue" : "grey"} /> }} />
    </Tab.Navigator>
  );
}

export default HomeComponent;
