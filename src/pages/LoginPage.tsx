import { Button } from '@react-native-material/core';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { NavigationType } from '../App';

const USERS: { [key: string]: string } = {
  Rinat: "ad40f3e7-7a79-4d6b-9ffe-f85a8e0658ce",
  Brandon: "a7fe332f-bb07-4c4e-a9ea-cc320d0e3514"
}

interface IProps extends NavigationType<'Profile'> {

}

const LoginPage: React.FC<IProps> = ({ navigation }) => {
  const [login, setLogin] = useState<string>('Rinat');
  const [password, setPassword] = useState<string>('Password');
  const onLoginChange = (value: string) => setLogin(value);
  const onPasswordChange = (value: string) => setPassword(value);
  const onSubmit = () => {
    navigation.navigate('Home', { userId: USERS[login] });
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Login' value={login} onChangeText={onLoginChange} />
      <TextInput placeholder='Password' value={password} onChangeText={onPasswordChange} />
      <Button disabled={!login || !password} title="Login" onPress={onSubmit} />
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
    backgroundColor: 'white',
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 4,

  },
  username: {
    fontSize: 24,

  },
  email: {
    fontSize: 12,

  }
});

