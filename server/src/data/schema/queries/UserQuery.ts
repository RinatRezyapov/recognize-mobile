import { GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import { globalIdField, connectionDefinitions, connectionFromArray } from 'graphql-relay';
import { GraphQLCourse, nodeInterface } from '../nodes';
import { getCourses, getUser } from '../../database';


const {
  connectionType: CoursesConnection,
  edgeType: GraphQLCourseEdge,
} = connectionDefinitions({
  name: 'Course',
  nodeType: GraphQLCourse,
})

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    userId: {
      type: GraphQLInt,
      resolve: user => user.id
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email
    },
    courses: {
      type: CoursesConnection,
      resolve: async (user, { after, before, first, last }, { pgPool }) => {
        try {
          const courses = await getCourses(user.id, pgPool);
          return connectionFromArray(courses, { after, before, first, last });
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
  interfaces: [nodeInterface],
})


const UserQuery = {
  type: GraphQLUser,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }, { pgPool }) => {
    return getUser(id, pgPool);
  }
}


export { UserQuery, GraphQLUser }
