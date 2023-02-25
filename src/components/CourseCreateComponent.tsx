import { fromNullable, none, of } from "fp-ts/lib/Option";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavigationType } from '../../App';
import NewCourseForm, { IFormFields as NewCourseFormFields } from '../forms/NewCourseForm';
import Course from '../models/Course';
import { addCourseToStorage } from "../utils/storage";


interface IProps extends NavigationType<'Course'> {

}

const CourseCreateComponent: React.FC<IProps> = ({ navigation, route }) => {

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
    await addCourseToStorage(course);
    navigation.navigate('Courses');
  }

  return <NewCourseForm onSubmit={onSubmit} />;
}

export default CourseCreateComponent;
