import AsyncStorage from '@react-native-async-storage/async-storage';
import { pipe } from 'fp-ts/lib/function';
import { fromNullable, getOrElse, none } from 'fp-ts/lib/Option';
import Course from '../models/Course';

export const addCourseToStorage = async (course: Course) => {
  const courses = await getCoursesFromStorage() || [];
  courses.push(course);
  const coursesJson = JSON.stringify(courses);
  await AsyncStorage.setItem('@courses', coursesJson)
}

export const updateCourseToStorage = async (id: string, newCourse: Course) => {
  const course = await getCourseFromStorage(id);
  if (course) {
    await removeCourseFromStorage(id);
    await addCourseToStorage(newCourse)
  }
}

export const getCoursesFromStorage = async (): Promise<Course[] | undefined> => {
  try {
    const coursesJson = await AsyncStorage.getItem('@courses')
    if (coursesJson) {
      const data = JSON.parse(coursesJson);
      return data.map(v => new Course(v));
    }
    return [];
  } catch (e) {
    console.error(e);
  }
}

export const getCourseFromStorage = async (id: string) => {
  const courses = await getCoursesFromStorage();
  return courses?.find(v => pipe(v.id, getOrElse(() => '')) === id);
}

export const removeCourseFromStorage = async (id: string) => {
  const courses = await getCoursesFromStorage();
  if (courses) {
    const newCourses = courses.filter(v => pipe(v.id, getOrElse(() => '')) !== id);
    const coursesJson = JSON.stringify(newCourses);
    await AsyncStorage.setItem('@courses', coursesJson)
  }
}