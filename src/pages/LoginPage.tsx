import styled from '@emotion/native';
import {Button, Text} from '@react-native-material/core';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const {authorize} = useAuth0();
  const {user} = useAuth0();
  const onLoginPress = async () => {
    try {
      await authorize();
      navigation.navigate('Home', {userId: 'ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce'});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Button onPress={onLoginPress} title="Log in" />
      {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.View`
  padding: 16px;
  height: 100%;
`;
