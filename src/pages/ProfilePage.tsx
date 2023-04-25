import React from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NavigationType} from '../App';
import ProfileComponent from '../components/ProfileComponent';
import {ProfilePageQuery as ProfilePageQueryType} from './__generated__/ProfilePageQuery.graphql';
import {UserQuery} from '../queries/User';

interface IProps extends NavigationType<'Profile'> {}

const ProfilePage: React.FC<IProps> = ({navigation, route}) => {
  const data = useLazyLoadQuery<ProfilePageQueryType>(UserQuery, {id: route.params?.userId});

  return <ProfileComponent userId={route.params?.userId} navigation={navigation} data={data} />;
};

export default ProfilePage;
