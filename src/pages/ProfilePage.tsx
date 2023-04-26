import React from 'react';
import {NavigationType} from '../App';
import ProfileComponent from '../components/ProfileComponent';

interface IProps extends NavigationType<'Profile'> {}

const ProfilePage: React.FC<IProps> = ({navigation, route}) => {
  return <ProfileComponent userId={route.params?.userId} navigation={navigation} />;
};

export default ProfilePage;
