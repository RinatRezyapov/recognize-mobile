import styled from '@emotion/native';
import { Button } from '@react-native-material/core';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLazyLoadQuery, usePreloadedQuery } from 'react-relay';
import MyCourseCardComponent from './MyCourseCardComponent';
import { ProfilePageQuery } from '../pages/ProfilePage';
import { ProfileComponentQuery as ProfileComponentQueryType } from './__generated__/ProfileComponentQuery.graphql';

interface IProps {
  data: any;
  navigation: any;
}

const ProfileComponent: React.FC<IProps> = ({ data, navigation }) => {

  return (
    <View style={styles.personalInfo}>
      <PersonalInfo>
        <Image source={require("./profile-pic.png")} style={styles.profileImg} />
        <View>
          <Text style={styles.username}>{data?.user?.username}</Text>
          <Text style={styles.email}>{data?.user?.email}</Text>
        </View>
      </PersonalInfo>
      <View>
        <Text style={styles.myCoursesTitle}>My courses</Text>
        <StyledButton variant='outlined' color="white" title='New course' onPress={() => navigation.navigate('CourseCreate')} />
        <ScrollView>
          {data?.user?.courses?.edges?.map(({ node }) => {
            return (
              <TouchableOpacity
                key={node?.id}
                onPress={() => navigation.navigate('Course', { id: node?._id, courseRef: node, userRef: data?.user })}
              >
                <MyCourseCardComponent
                  title={node?.title}
                  description={node?.description}
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
  backgroundColor: #2196f3;
  color: white;
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
    borderRadius: 100,
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
