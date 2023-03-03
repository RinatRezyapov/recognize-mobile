import { useFocusEffect } from '@react-navigation/native';
import { pipe } from 'fp-ts/lib/function';
import { getOrElse } from 'fp-ts/lib/Option';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql, useLazyLoadQuery, usePreloadedQuery } from 'react-relay';
import { NavigationType } from '../../App';
import Course from '../models/Course';
import { LandingPageQuery } from '../pages/LandingPage';
import { getCourseFromStorage, removeCourseFromStorage } from '../utils/storage';



interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {
  const data = useLazyLoadQuery<any>(graphql`
  query CourseComponentQuery($id: String) {
    user(id: $id) {
      id,
      username, 
      email,
      courses {
        edges {
          node {
            id
            title
            body
          }
        }
      }
    }
  }
`, { id: '1' });


  const course = data.user.courses.edges.find(v => v.node.id === route?.params?.id)?.node;

  const onDeleteCourseClick = (id: string) => async () => {
    await removeCourseFromStorage(id);
    navigation.navigate('Courses');
  };

  const onEditCourseClick = (id: string) => async () => {
    navigation.navigate('CourseEdit', { id });
  }

  const onStartCourseClick = (id: string) => async () => {
    navigation.navigate('CoursePlayer', { id });
  };

  if (!course) return <ActivityIndicator size="large" />;

  return <View style={styles.container}>
    <Text>Name: {course.title}</Text>
    <Text>Data: {course.body}</Text>
    <View style={styles.buttonsContainer}>
      <Button title='Start' onPress={onStartCourseClick(route?.params?.id)} />
      <Button title='Edit' onPress={onEditCourseClick(route?.params?.id)} />
      <Button title='Remove' onPress={onDeleteCourseClick(route?.params?.id)} />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  }
});

export default CourseComponent;
