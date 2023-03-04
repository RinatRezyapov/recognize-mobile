import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import { globalIdField, connectionDefinitions, connectionFromArray } from 'graphql-relay';
import { nodeInterface } from '../nodes';
import { getCourse, getCourses, getUser } from '../../database';


export const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: {
      type: GraphQLString,
      resolve: course => course.id,
    },
    description: {
      type: GraphQLString,
      resolve: course => course.description,
    },
    authorid: {
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
    created: {
      type: GraphQLInt,
      resolve: course => course.created_at,
    },
  },
});

const CourseQuery = {
  type: GraphQLCourse,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }, { pgPool }) => {
    return getCourse(id, pgPool);
  }
}


export {CourseQuery}
