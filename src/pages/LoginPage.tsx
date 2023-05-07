import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {NavigationType} from '../App';

const USERS: {[key: string]: string} = {
  Rinat: 'ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce',
  Brandon: 'a7fe332f-bb07-4c4e-a9ea-cc320d0e3514',
  John: 'e5caede3-2784-422a-8c75-b8ff5fa9031d',
};

interface IProps extends NavigationType<'Login'> {}

const LoginPage: React.FC<IProps> = ({navigation}) => {
  const [login, setLogin] = useState<string>('Rinat');
  const [password, setPassword] = useState<string>('Password');
  const onLoginChange = (value: string) => setLogin(value);
  const onPasswordChange = (value: string) => setPassword(value);
  const onSubmit = () => navigation.navigate('Home', {userId: USERS[login]});

  return (
    <Wrapper>
      <TextInput placeholder="Login" value={login} onChangeText={onLoginChange} />
      <TextInput placeholder="Password" value={password} onChangeText={onPasswordChange} />
      <Button disabled={!login || !password} title="Login" onPress={onSubmit} />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.View`
  padding: 16px;
  height: 100%
  background-color: white;
`;
