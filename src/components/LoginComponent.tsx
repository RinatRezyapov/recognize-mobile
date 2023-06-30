import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import jwt_decode from 'jwt-decode';
import React, {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import {useLazyLoadQuery} from 'react-relay';
import {useAddUserMutation} from '../mutations/AddUserMutation';
import {UserQuery} from '../queries/User';
import {UserQuery as UserQueryType} from '../queries/__generated__/UserQuery.graphql';
import {IIDToken} from '../types/oauth2';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  userInfo: IIDToken | null;
}

const LoginComponent: React.FC<IProps> = ({navigation, userInfo}) => {
  const {authorize, getCredentials} = useAuth0();
  const commitAddUserMutation = useAddUserMutation();
  const {user} = useLazyLoadQuery<UserQueryType>(UserQuery, {email: userInfo?.email});

  useEffect(() => {
    if (user?._id) navigation.navigate('Home', {userId: user?._id});
  }, [user]);

  const getUserInfo = async (): Promise<IIDToken | null> => {
    const credentials = await getCredentials();
    return credentials?.idToken ? jwt_decode(credentials.idToken) : null;
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
      <Button onPress={onLoginPress} title="Log in" />
    </Wrapper>
  );
};

export default LoginComponent;

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
`;
