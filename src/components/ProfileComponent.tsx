import styled from '@emotion/native';
import { Button } from '@react-native-material/core';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import CourseCardComponent from './CourseCardComponent';

interface IProps {
  data: any;
  navigation: any;
  userId: string;
}

const ProfileComponent: React.FC<IProps> = ({ data, navigation, userId }) => {

  return (
    <Wrapper>
      <PersonalInfo>
        <Avatar source={require("./profile-pic.png")} />
        <View>
          <UsernameText>{data?.user?.username}</UsernameText>
          <EmailText>{data?.user?.email}</EmailText>
          <Button title='Logout' tintColor='white' color='#f73378' onPress={() => navigation.navigate('Login')} />
        </View>
      </PersonalInfo>
      <View>
        <StyledButton tintColor='white' color="#35baf6" title='New course' onPress={() => navigation.navigate('CourseCreate', { id: userId })} />
        <ScrollView>
          {data?.user?.courses?.edges?.map(({ node }) => {
            return (
              <TouchableOpacity
                key={node?.id}
                onPress={() => navigation.navigate('Course', { id: node?._id, courseRef: node, userRef: data?.user })}
              >
                <CourseCardComponent
                  user={data.user}
                  course={node}
                />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </Wrapper>
  );
}

export default ProfileComponent;

const Wrapper = styled.View`
  padding: 16px;
  background-color: white;
  height: 100%;
`;

const StyledButton = styled(Button)`
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
  border-radius: 30px;
  border-width: 4px;
`;
