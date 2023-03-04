import React from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';

import CourseCardComponent from './CourseCardComponent';

interface IProps {
  courses: { node: { id: string, title: string, body: string, description: string } }[];
  navigation: any;
}

const CoursesComponent: React.FC<IProps> = ({ courses, navigation }) => {
  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {courses.map(v => {
          return (
            <TouchableOpacity
              key={v.node.id}
              onPress={() => navigation.navigate('Course', { id: v.node.id })}
            >
              <CourseCardComponent
                title={v.node.title}
                description={v.node.description}
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
