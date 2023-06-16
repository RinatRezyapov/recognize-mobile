// import {GraphQLObjectType} from 'graphql';
// import {connectionFromArray} from 'graphql-relay';
// import {Course as CourseModel} from '../../database';

// export var GraphQLCourses = new GraphQLObjectType<CourseModel[]>({
//   name: 'Courses',
//   fields: {
//     node: (() => require('./nod').default.nodeField)(),
//     data: {
//       type: (() => require('./Course').default.connectionType)(),
//       resolve: async (courses, {after, before, first, last}) => {
//         try {
//           return connectionFromArray(courses, {after, before, first, last});
//         } catch (err) {
//           console.error(err);
//         }
//       },
//     },
//   },
// });

import {GraphQLInt, GraphQLList, GraphQLObjectType} from 'graphql';
import {connectionArgs, connectionDefinitions, connectionFromArray} from 'graphql-relay';
import {Course, fetchPaginatedCourses, getCourses} from '../../database';
import {GraphQLCourse} from './Course';

export const GraphQLCourses = new GraphQLObjectType({
  name: 'Courses',
  fields: {
    data: {
      type: GraphQLList(GraphQLCourse),
      args: {
        ...connectionArgs,
      },
      resolve: async (parent, {after, before, first, last}, {pgPool}) => {
        try {
          const courses = await fetchPaginatedCourses(first, after, last, before, pgPool);
          return connectionFromArray(courses, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
});

export default connectionDefinitions({
  name: 'Courses',
  nodeType: GraphQLCourses,
});
