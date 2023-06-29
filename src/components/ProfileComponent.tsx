import styled from '@emotion/native';
import {Text, IconButton} from '@react-native-material/core';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';
import {UserQuery} from '../queries/User';
import CourseCardComponent from './CourseCardComponent';
import {ProfileComponentQuery as ProfileComponentQueryType} from './__generated__/ProfileComponentQuery.graphql';
import {useAuth0} from 'react-native-auth0';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  navigation: any;
  userId: string;
}

const ProfileComponent: React.FC<IProps> = ({navigation, userId}) => {
  const {user} = useLazyLoadQuery<ProfileComponentQueryType>(UserQuery, {id: userId});
  const {user: userProfile, clearSession} = useAuth0();

  const onLogoutPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <PersonalCard>
        <Avatar source={{uri: userProfile?.picture}} />
        <PersonalInfo>
          <UsernameText>{userProfile?.nickname}</UsernameText>
          <EmailText>{userProfile?.email}</EmailText>
          <LogoutWrapper>
            <IconButton icon={props => <IconMaterial name="logout-variant" {...props} />} onPress={onLogoutPress} />
          </LogoutWrapper>
        </PersonalInfo>
      </PersonalCard>
      <View>
        <Text variant="h5">My Courses</Text>
        <ScrollView>
          {user?.courses?.edges?.map(edge => {
            return (
              <View key={edge?.node?.id}>
                <TouchableOpacity onPress={() => navigation.navigate('Course', {course: edge?.node, user: user})}>
                  <CourseCardComponent user={user} course={edge?.node} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <AddCourseButtonWrapper>
          <IconButton
            icon={props => <Icon name="plus-circle" {...props} size={40} />}
            color="primary"
            onPress={() => navigation.navigate('CourseCreate', {userId})}
          />
        </AddCourseButtonWrapper>
      </View>
    </Wrapper>
  );
};

export default ProfileComponent;

const Wrapper = styled.View`
  padding: 16px;
  height: 100%;
`;

const PersonalCard = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 16px;
  padding: 8px;
`;

const PersonalInfo = styled.View`
  flex: 1;
`;

const UsernameText = styled.Text`
  font-size: 24px;
`;

const EmailText = styled.Text`
  font-size: 12px;
`;

const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 16px;
  border-width: 4px;
`;

const LogoutWrapper = styled.View`
  display: flex;
  align-items: flex-end;
`;

const AddCourseButtonWrapper = styled.View`
  display: flex;
  align-items: flex-end;
`;
