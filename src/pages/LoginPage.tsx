import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import React from 'react';
import {useAuth0} from 'react-native-auth0';
import {NavigationType} from '../App';

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const {authorize} = useAuth0();

  const onLoginPress = async () => {
    try {
      await authorize();
      //navigation.navigate('Home')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Button onPress={onLoginPress} title="Log in" />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.View`
  padding: 16px;
  height: 100%;
`;
