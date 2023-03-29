import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

interface IProps {
  title: string;
  description: string;
}


const MyCourseCardComponent: React.FC<IProps> = ({ title, description }) => {
  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseTitle}>
        {title}
      </Text>
      <Text style={styles.courseDescription}>
        {description}
      </Text>
    </View>
  );
}

export default MyCourseCardComponent;

const styles = StyleSheet.create({
  courseContainer: {
    marginBottom: 16,
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  courseDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
  },
});