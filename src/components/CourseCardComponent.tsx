import { pipe } from 'fp-ts/lib/function';
import { getOrElse, Option } from 'fp-ts/lib/Option';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

interface IProps {
  title: Option<string>;
  description: Option<string>;
}


const CourseCardComponent: React.FC<IProps> = ({ title, description }) => {
  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseTitle}>
        {pipe(title, getOrElse(() => ''))}
      </Text>
      <Text style={styles.courseDescription}>
        {pipe(description, getOrElse(() => ''))}
      </Text>
    </View>
  );
}

export default CourseCardComponent;

const styles = StyleSheet.create({
  courseContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  courseDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});