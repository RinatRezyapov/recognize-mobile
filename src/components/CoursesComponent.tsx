import React from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { usePreloadedQuery } from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import { ProfileComponentQuery } from './ProfileComponent';
import { ProfileComponentQuery as ProfileComponentQueryType } from './__generated__/ProfileComponentQuery.graphql';

interface IProps {
  initialQueryRef: any;
  navigation: any;
}

const CoursesComponent: React.FC<IProps> = ({ initialQueryRef, navigation }) => {

  const data = usePreloadedQuery<ProfileComponentQueryType>(ProfileComponentQuery, initialQueryRef);

  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {data?.user?.courses?.edges?.map(({ node }) => {
          return (
            <TouchableOpacity
              key={node?._id}
              onPress={() => navigation.navigate('Course', { id: node?._id, courseRef: node })}
            >
              <CourseCardComponent
                title={node?.title}
                description={node?.description}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  newCourseButton: {
    margin: 16,
  }
});

export default CoursesComponent;
