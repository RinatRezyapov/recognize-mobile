import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { usePreloadedQuery } from 'react-relay';
import { ProfileComponentQuery } from './ProfileComponent';
import { ProfileComponentQuery as ProfileComponentQueryType } from './__generated__/ProfileComponentQuery.graphql';

interface IProps {
  initialQueryRef: any;
}

const ProfileComponent: React.FC<IProps> = ({ initialQueryRef }) => {
  const data = usePreloadedQuery<ProfileComponentQueryType>(ProfileComponentQuery, initialQueryRef);

  return (
    <View style={styles.personalInfo}>
      <Image source={require("./profile-pic.png")} style={styles.profileImg} />
      <View>
        <Text style={styles.username}>{data?.user?.username}</Text>
        <Text style={styles.email}>{data?.user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
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

export default ProfileComponent;