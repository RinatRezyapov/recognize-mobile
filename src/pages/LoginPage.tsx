import styled from '@emotion/native';
import {ActivityIndicator, Button} from '@react-native-material/core';
import jwt_decode from 'jwt-decode';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';
import {useAddUserMutation} from '../mutations/AddUserMutation';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const {isLoading, authorize, user, getCredentials} = useAuth0();
  const commitAddUserMutation = useAddUserMutation();

  const getUserInfo = async () => {
    const credentials = await getCredentials();
    if (credentials?.idToken) {
      return jwt_decode(credentials.idToken) as {email: string; name: string};
    }

    return null;
  };

  const onLoginPress = async () => {
    try {
      await authorize();
      const userInfo = await getUserInfo();
      if (userInfo) {
        commitAddUserMutation(userInfo.email, userInfo.name, userId => navigation.navigate('Home', {userId}));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      {isLoading ? <ActivityIndicator size="large" /> : <Button onPress={onLoginPress} title="Log in" />}
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
`;
