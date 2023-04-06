import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationType } from '../App';
import CoursesComponent from '../components/CoursesComponent';
import ProfilePage from './ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps extends NavigationType<'Home'> {

}

const Tab = createBottomTabNavigator();

const HomePage: React.FC<IProps> = ({ route }) => {

  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Profile"
        initialParams={{ userId: route.params?.userId }}
        component={ProfilePage}
        options={{ tabBarIcon: ({ focused }) => <Icon name="user" size={30} color={focused ? "lightblue" : "grey"} /> }}
      />
      <Tab.Screen
        name="Courses"
        initialParams={{ userId: route.params?.userId }}
        component={CoursesComponent}
        options={{ tabBarIcon: ({ focused }) => <Icon name="th-list" size={30} color={focused ? "lightblue" : "grey"} /> }}
      />
    </Tab.Navigator>
  );
}

export default HomePage;
