import {connectionArgs} from 'graphql-relay';

import {fetchPaginatedCourses} from '../../database';
import {GraphQLCourses} from '../nodes/Courses';

const CoursesQuery = {
  type: GraphQLCourses,
  args: connectionArgs,
  resolve: (root, {first, after, last, before}, {pgPool}) => {
    console.log('Query', first, after, last, before);
    return fetchPaginatedCourses(first, after, last, before, pgPool);
  },
};

export {CoursesQuery};
