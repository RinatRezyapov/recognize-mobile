import {GraphQLObjectType} from 'graphql';
import {connectionFromArray} from 'graphql-relay';
import {Course as CourseModel} from '../../database';

export var GraphQLCourses = new GraphQLObjectType<CourseModel[]>({
  name: 'Courses',
  fields: {
    node: (() => require('./nod').default.nodeField)(),
    data: {
      type: (() => require('./Course').default.connectionType)(),
      resolve: async (courses, {after, before, first, last}) => {
        try {
          return connectionFromArray(courses, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
});
