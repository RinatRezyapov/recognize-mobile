import { GraphQLString } from 'graphql';
import { getAllCourses } from '../../database';
import { GraphQLCourses } from '../nodes';

const CoursesQuery = {
  type: GraphQLCourses,
  resolve: (root, { id }, { pgPool }) => {
    return getAllCourses(pgPool);
  }
}


export { CoursesQuery };

