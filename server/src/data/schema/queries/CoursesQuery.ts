import {connectionArgs, connectionFromArray} from 'graphql-relay';

import {fetchPaginatedCourses} from '../../database';
import {GraphQLCourses} from '../nodes/Courses';

// const CoursesQuery = {
//   type: GraphQLCourses,
//   args: connectionArgs,
//   resolve: (root, {first, after, last, before}, {pgPool}) => {
//     console.log('Query', first, after, last, before);
//     return fetchPaginatedCourses(first, after, last, before, pgPool);
//   },
// };

// const CoursesQuery = {
//   type: (() => require('../nodes/Courses').default.connectionType)(),
//   args: {
//     ...connectionArgs,
//   },
//   resolve: async (parent, args, {pgPool}) => {
//     try {
//       return {args, pgPool};
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };

// export {CoursesQuery};
