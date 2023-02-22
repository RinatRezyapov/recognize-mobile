import { useFocusEffect } from '@react-navigation/native';
import { getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationType } from '../../App';
import Course from '../models/Course';
import { getCourseFromStorage, removeCourseFromStorage } from '../utils/storage';



interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {

  const [course, setCourse] = useState<Course>();

  useFocusEffect(
    useCallback(() => {
      getCourseFromStorage(route?.params?.id).then(data => {
        if (data) setCourse(data);
      }).catch(err => console.error(err));
    }, [])
  );

  const onDeleteCourseClick = (id: string) => async () => {
    await removeCourseFromStorage(id);
    navigation.navigate('Courses');
  };

  const onStartCourseClick = (id: string) => async () => {
    navigation.navigate('CoursePlayer', { id });
  };

  if (!course) return <ActivityIndicator size="large" />;

  return <View style={styles.container}>
    <Text>Name: {pipe(course.title, getOrElse(() => ''))}</Text>
    <Text>Description: {pipe(course.description, getOrElse(() => ''))}</Text>
    <Text>Data: {pipe(course.data, getOrElse(() => ''))}</Text>
    <View style={styles.buttonsContainer}>
      <Button title='Start' onPress={onStartCourseClick(route?.params?.id)} />
      <Button title='Edit' onPress={onDeleteCourseClick(route?.params?.id)} />
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
