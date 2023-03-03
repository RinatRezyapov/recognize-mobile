import React from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { NavigationType } from '../../App';
import { removeCourseFromStorage } from '../utils/storage';

interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {
  const { course } = useLazyLoadQuery<any>(graphql`
    query CourseComponentQuery($id: String) {
      course(id: $id) {
        id,
        title, 
        body,

      }
    }
  `, { id: route.params.id });

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
