import { useFocusEffect } from "@react-navigation/native";
import { pipe } from 'fp-ts/lib/function';
import { fromNullable, getOrElse, none, of } from "fp-ts/lib/Option";
import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { graphql, useLazyLoadQuery } from "react-relay";
import { v4 as uuidv4 } from 'uuid';
import { NavigationType } from '../../App';
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';
import Course from '../models/Course';
import { getCourseFromStorage, updateCourseToStorage } from "../utils/storage";

interface IProps extends NavigationType<'Course'> {

}

const CourseEditComponent: React.FC<IProps> = ({ navigation, route }) => {

  const { course } = useLazyLoadQuery<any>(graphql`
    query CourseEditComponentQuery($id: String) {
      course(id: $id) {
        id,
        title,
        description,
        body,
      }
    }
  `, { id: route.params.id });

  const onSubmit = async (fields: NewCourseFormFields) => {
    const course = new Course({
      id: of(uuidv4()),
      title: fromNullable(fields.title),
      data: fromNullable(fields.data),
      picture: none,
      description: fromNullable(fields.description),
      tags: none,
      createdAt: of(new Date()),
      updatedAt: of(new Date()),
    });
    await updateCourseToStorage(route.params.id, course);
    navigation.navigate('Courses');
  }

  if (!course) return <ActivityIndicator size="large" />;

  const title = course.title;
  const description = course.description;
  const data = course.body;

  return <NewCourseForm defaultValues={{ title, description, data }} onSubmit={onSubmit} />;
}

export default CourseEditComponent;
