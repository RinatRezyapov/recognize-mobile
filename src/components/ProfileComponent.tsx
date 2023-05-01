import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import CourseCardComponent from './CourseCardComponent';
import {ProfileComponentQuery as ProfileComponentQueryType} from './__generated__/ProfileComponentQuery.graphql';
import {useLazyLoadQuery} from 'react-relay';
import {UserQuery} from '../queries/User';

interface IProps {
  navigation: any;
  userId: string;
}

const ProfileComponent: React.FC<IProps> = ({navigation, userId}) => {
  const {user} = useLazyLoadQuery<ProfileComponentQueryType>(UserQuery, {id: userId});
  return (
    <Wrapper>
      <PersonalInfo>
        <Avatar source={require('./profile-pic.png')} />
        <View>
          <UsernameText>{user?.username}</UsernameText>
          <EmailText>{user?.email}</EmailText>
          <StyledButton
            title="Logout"
            tintColor="white"
            color="#f73378"
            disableElevation
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </PersonalInfo>
      <View>
        <StyledButton
          tintColor="white"
          color="#35baf6"
          title="New course"
          disableElevation
          disabled={(user?.courses?.edges?.length || 0) >= 2}
          onPress={() => navigation.navigate('CourseCreate', {userId})}
        />
        <ScrollView>
          {user?.courses?.edges?.map(edge => {
            return (
              <TouchableOpacity
                key={edge?.node?.id}
                onPress={() => navigation.navigate('Course', {courseRef: edge?.node, userRef: user})}>
                <CourseCardComponent user={user} course={edge?.node} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default ProfileComponent;

const Wrapper = styled.View`
  padding: 16px;
  background-color: white;
  height: 100%;
`;

const StyledButton = styled(Button)`
  border-radius: 16px;
  margin: 16px 0;
`;

const PersonalInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const UsernameText = styled.Text`
  font-size: 24px;
`;

const EmailText = styled.Text`
  font-size: 12px;
`;

const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 16px;
  border-width: 4px;
`;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
  },
});
