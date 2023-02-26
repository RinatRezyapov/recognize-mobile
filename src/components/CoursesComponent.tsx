import React, { useCallback, useState } from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { pipe } from 'fp-ts/lib/function';
import { getOrElse } from 'fp-ts/lib/Option';
import {
  graphql, loadQuery, usePreloadedQuery
} from "react-relay/hooks";
import { NavigationType } from '../../App';
import Course from '../models/Course';
import { getCoursesFromStorage } from '../utils/storage';
import CourseCardComponent from './CourseCardComponent';
import RelayEnvironment from '../RelayEnvironment';

export const CoursesComponentQuery = graphql`
  query CoursesComponentQuery($id: String) {
    user(id: $id) {
      id,
      name, 
      email,
      courses {
        edges {
          node {
            id,
            title,
            body
          }
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, CoursesComponentQuery, {
  id: "3",
});


interface IProps extends NavigationType<'Courses'> {

}

const CoursesComponent: React.FC<IProps> = ({ navigation }) => {
  const data = usePreloadedQuery<any>(CoursesComponentQuery, preloadedQuery);
  console.log(data);
  const [courses, setCourses] = useState<Course[]>([]);

  useFocusEffect(
    useCallback(() => {
      getCoursesFromStorage().then(data => {
        if (data) setCourses(data);
      }).catch(err => console.error(err));
    }, [])
  );

  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {courses.map((v, idx) => {
          return (
            <TouchableOpacity
              key={pipe(v.id, getOrElse(() => idx.toString()))}
              onPress={() => navigation.navigate('Course', { id: pipe(v.id, getOrElse(() => idx.toString())) })}
            >
              <CourseCardComponent
                title={v.title}
                description={v.description}
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
