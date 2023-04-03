import styled from '@emotion/native';
import { Button } from '@react-native-material/core';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseCardComponent from './CourseCardComponent';

interface IProps {
  data: any;
  navigation: any;
  userId: string;
}

const ProfileComponent: React.FC<IProps> = ({ data, navigation, userId }) => {

  return (
    <View style={styles.personalInfo}>
      <PersonalInfo>
        <Image source={require("./profile-pic.png")} style={styles.profileImg} />
        <View>
          <Text style={styles.username}>{data?.user?.username}</Text>
          <Text style={styles.email}>{data?.user?.email}</Text>
          <Button title='Logout' tintColor='white' color='#f73378' onPress={() => navigation.navigate('Login')} />
        </View>
      </PersonalInfo>
      <View>
        <Text style={styles.myCoursesTitle}>My courses</Text>
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
    </View>
  );
}

export default ProfileComponent;

const StyledButton = styled(Button)`

  margin: 16px 0;
`;

const PersonalInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 30,
    borderWidth: 4,

  },
  username: {
    fontSize: 24,

  },
  email: {
    fontSize: 12,

  },
  myCoursesTitle: {
    fontSize: 18,
  }
});
