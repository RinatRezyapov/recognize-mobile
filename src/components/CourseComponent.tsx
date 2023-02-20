import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationType } from '../../App';
import { removeCourseFromStorage } from '../utils/storage';



interface IProps extends NavigationType<'Course'> {

}

const CourseComponent: React.FC<IProps> = ({ navigation, route }) => {

  const onDeleteCourseClick = (id: string) => async () => {
    await removeCourseFromStorage(id);
    navigation.navigate('Courses');
  };

  return <View style={styles.container}>
    <Text>This is {route?.params?.id} course</Text>
    <Button title='Remove' onPress={onDeleteCourseClick(route?.params?.id)} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
  },
});

export default CourseComponent;
