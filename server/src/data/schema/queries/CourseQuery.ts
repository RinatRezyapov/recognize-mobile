import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { getCourse } from '../../database';
import { globalIdField, connectionDefinitions, connectionFromArray } from 'graphql-relay';

export const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: globalIdField('Course'),
    _id: {
      type: GraphQLInt,
      resolve: course => course.id,
    },
    description: {
      type: GraphQLString,
      resolve: course => course.description,
    },
    authorId: {
      type: GraphQLString,
      resolve: course => course.author_id,
    },
    title: {
      type: GraphQLString,
      resolve: course => course.title,
    },
    body: {
      type: GraphQLString,
      resolve: course => course.body,
    },
    createdAt: {
      type: GraphQLInt,
      resolve: course => course.created_at,
    },
    updatedAt: {
      type: GraphQLInt,
      resolve: course => course.updated_at,
    },
  },
});

const CourseQuery = {
  type: GraphQLCourse,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (root, { id }, { pgPool }) => {
    return getCourse(id, pgPool);
  }
}


export { CourseQuery };
