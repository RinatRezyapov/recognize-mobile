
import { getAllCourses, getCourse, getCourses, getUser } from '../database';
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, nodeDefinitions, fromGlobalId, connectionDefinitions, connectionFromArray, connectionArgs } from 'graphql-relay';


const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId, { pgPool }) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Course') {
      return (getCourse(id, pgPool));
    } else if (type === 'User') {
      return (getUser(id, pgPool));
    }
    return null;
  },
  (obj) => {
    return GraphQLCourse;
  }
)

const todosArgs = {
  status: {
    type: GraphQLString,
    defaultValue: 'any',
  },
  ...connectionArgs,
};

const GraphQLCourse = new GraphQLObjectType({
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
  interfaces: [nodeInterface],
});

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
    _id: {
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
      args: todosArgs,
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

const GraphQLCourses = new GraphQLObjectType({
  name: 'Courses',
  fields: {
    courses: {
      type: CoursesConnection,
      args: todosArgs,
      resolve: async (user, { after, before, first, last }, { pgPool }) => {
        try {
          const courses = await getAllCourses(pgPool);
          return connectionFromArray(courses, { after, before, first, last });
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
})


export { GraphQLUser, GraphQLCourse, GraphQLCourses, GraphQLCourseEdge, nodeField }