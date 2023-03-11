import React from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';

import CourseCardComponent from './CourseCardComponent';

interface IProps {
  courses: { node: { _id: number, title: string, body: string, description: string } }[];
  navigation: any;
}

const CoursesComponent: React.FC<IProps> = ({ courses, navigation }) => {
  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {courses?.map(v => {
          return (
            <TouchableOpacity
              key={v.node._id}
              onPress={(e) => navigation.navigate('Course', { id: v.node._id })}
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
