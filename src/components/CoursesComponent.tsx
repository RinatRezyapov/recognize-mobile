import React, { useCallback, useState } from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { pipe } from 'fp-ts/lib/function';
import { getOrElse } from 'fp-ts/lib/Option';
import { NavigationType } from '../../App';
import Course from '../models/Course';
import { getCoursesFromStorage } from '../utils/storage';
import CourseCardComponent from './CourseCardComponent';

interface IProps {
  courses: {node: {id: string, title: string, body: string} } [];
  navigation: any;
}

const CoursesComponent: React.FC<IProps> = ({ courses, navigation }) => {



  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {courses.map((v, idx) => {
          return (
            <TouchableOpacity
              key={v.node.id}
              onPress={() => navigation.navigate('Course', { id: v.node.id })}
            >
              <CourseCardComponent
                title={v.node.title}
                description={v.node.title}
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
