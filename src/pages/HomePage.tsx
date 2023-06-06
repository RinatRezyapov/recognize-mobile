import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationType} from '../App';
import CoursesComponent from '../components/CoursesComponent';
import ProfilePage from './ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScoresFilterComponent from '../components/ScoresFilterComponent';

interface IProps extends NavigationType<'Home'> {}

const Tab = createBottomTabNavigator();

const HomePage: React.FC<IProps> = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Profile" screenOptions={{headerShown: false, tabBarStyle: {height: 70}}}>
      <Tab.Screen
        name="Profile"
        initialParams={{userId: route.params?.userId}}
        component={ProfilePage}
        options={{
          tabBarActiveTintColor: '#fc4445',
          tabBarInactiveTintColor: 'lightgrey',
          tabBarIcon: ({focused}) => <Icon name="user-o" size={30} color={focused ? '#fc4445' : 'grey'} />,
        }}
      />
      <Tab.Screen
        name="Courses"
        initialParams={{userId: route.params?.userId}}
        component={CoursesComponent}
        options={{
          tabBarActiveTintColor: '#659dbd',
          tabBarInactiveTintColor: 'lightgrey',
          tabBarIcon: ({focused}) => <Icon name="list" size={30} color={focused ? '#659dbd' : 'lightgrey'} />,
        }}
      />
      <Tab.Screen
        name="Scores"
        component={ScoresFilterComponent}
        options={{
          tabBarActiveTintColor: '#f7da00',
          tabBarInactiveTintColor: 'lightgrey',
          tabBarIcon: ({focused}) => (
            <Icon name="star-half-empty" size={30} color={focused ? '#f7da00' : 'lightgrey'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
