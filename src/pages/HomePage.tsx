import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationType } from '../App';
import CoursesComponent from '../components/CoursesComponent';
import ProfilePage from './ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps extends NavigationType<'Home'> {

}

const Tab = createBottomTabNavigator();

const HomePage: React.FC<IProps> = ({ navigation, route }) => {

  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" initialParams={{ id: route.params?.id }} component={ProfilePage} options={{ tabBarIcon: ({ focused }) => <Icon name="user" size={30} color={focused ? "lightblue" : "grey"} /> }} />
      <Tab.Screen name="Courses" initialParams={{ id: route.params?.id }} component={CoursesComponent} options={{ tabBarIcon: ({ focused }) => <Icon name="th-list" size={30} color={focused ? "lightblue" : "grey"} /> }} />
    </Tab.Navigator>
  );
}

export default HomePage;
