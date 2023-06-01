import styled from '@emotion/native';
import {Button, Text} from '@react-native-material/core';
import React, {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';
import {useAddUserMutation} from '../mutations/AddUserMutation';
import jwt_decode from 'jwt-decode';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const {isLoading, authorize, user, getCredentials} = useAuth0();
  const commitAddUserMutation = useAddUserMutation();

  const onLoginPress = async () => {
    try {
      await authorize();
      const credentials = await getCredentials();
      if (credentials?.idToken) {
        const usserInfo = jwt_decode(credentials.idToken) as {email: string; name: string};
        await commitAddUserMutation(usserInfo.email, usserInfo.name, userId => {
          console.log('User ID', userId);
          navigation.navigate('Home', {userId});
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('Home', {userId: 'ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce'});
    }
  }, [user]);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Wrapper>
      <Button onPress={onLoginPress} title="Log in" />
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
