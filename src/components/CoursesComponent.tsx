import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  Button, ScrollView, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';

import CourseCardComponent from './CourseCardComponent';
import CourseComponent from './CourseComponent';
import CourseCreateComponent from './CourseCreateComponent';
import CourseEditComponent from './CourseEditComponent';
import CoursePlayerComponent from './CoursePlayerComponent';

interface IProps {
  initialQueryRef: any;
  navigation: any;
}

const CoursesComponentQuery = graphql`
  query CoursesComponentQuery($id: String) {
    user(id: $id) {
      id,
      _id,
      username, 
      email,
      courses(first: 2147483647) @connection(key: "Courses_courses") {
        edges {
          node {
            id
            _id
            title
            description
            body
            ...CourseComponent_course
            ...CoursePlayerComponent_course
            ...CourseEditComponent_course
          }
        }
      }
    }
  }
`

const CoursesComponent: React.FC<IProps> = ({ initialQueryRef, navigation }) => {

  const data = useLazyLoadQuery(CoursesComponentQuery, { id: '1' });

  return (
    <View>
      <View style={styles.newCourseButton}>
        <Button title='New course' onPress={() => navigation.navigate('CourseCreate')} />
      </View>
      <ScrollView>
        {data?.user?.courses?.edges?.map(({ node }) => {
          return (
            <TouchableOpacity
              key={node?._id}
              onPress={() => navigation.navigate('Course', { id: node?._id, courseRef: node })}
            >
              <CourseCardComponent
                title={node?.title}
                description={node?.description}
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
    borderRadius: 50,
  },
});

export default CoursesComponent;
