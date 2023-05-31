import styled from '@emotion/native';
import {Button, Text} from '@react-native-material/core';
import React, {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';
import {useAddUserMutation} from '../mutations/AddUserMutation';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const {authorize, user} = useAuth0();
  const commitAddUserMutation = useAddUserMutation();

  const onLoginPress = async () => {
    try {
      const res = await authorize();
      console.log('authorize', res);
      commitAddUserMutation(user.email, user.name);
      navigation.navigate('Home', {userId: 'ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce'});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('Home', {userId: 'ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce'});
    }
  }, [user]);

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
