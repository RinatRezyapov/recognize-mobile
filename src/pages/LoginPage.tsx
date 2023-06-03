import {ActivityIndicator} from '@react-native-material/core';
import jwt_decode from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';
import LoginComponent from '../components/LoginComponent';
import {IIDToken} from '../types/oauth2';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const [userInfoFetching, setUserInfoFetching] = useState(true);
  const [userInfo, setUserInfo] = useState<IIDToken | null>(null);
  const {isLoading, getCredentials} = useAuth0();

  const getUserInfo = async (): Promise<IIDToken | null> => {
    const credentials = await getCredentials();
    return credentials?.idToken ? jwt_decode(credentials.idToken) : null;
  };

  useEffect(() => {
    getUserInfo()
      .then(userInfo => setUserInfo(userInfo))
      .catch(err => console.log(err))
      .finally(() => setUserInfoFetching(false));
  }, []);

  return isLoading || userInfoFetching ? (
    <ActivityIndicator size="large" />
  ) : (
    <LoginComponent userInfo={userInfo} navigation={navigation} />
  );
};

export default LoginPage;
