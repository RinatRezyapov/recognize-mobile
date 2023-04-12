import {getAllCourses, getCourse, getCourseLikes, getCourseScores, getCourses, getUser} from '../database';
import {GraphQLFloat, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {
  globalIdField,
  nodeDefinitions,
  fromGlobalId,
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
} from 'graphql-relay';

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId, {pgPool}) => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Course') {
      return getCourse(id, pgPool);
    } else if (type === 'User') {
      return getUser(id, pgPool);
    }
    return null;
  },
  obj => {
    return GraphQLCourse;
  },
);

const todosArgs = {
  status: {
    type: GraphQLString,
    defaultValue: 'any',
  },
  ...connectionArgs,
};

const GraphQLScore = new GraphQLObjectType({
  name: 'Score',
  fields: {
    userId: {
      type: GraphQLString,
      resolve: score => score.user_id,
    },
    score: {
      type: GraphQLFloat,
      resolve: score => score.score,
    },
  },
});

const {connectionType: ScoresConnection, edgeType: GraphQLScoreEdge} = connectionDefinitions({
  name: 'Score',
  nodeType: GraphQLScore,
});

const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: globalIdField('Course'),
    _id: {
      type: GraphQLString,
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
    author: {
      type: GraphQLString,
      resolve: async (course, {}, {pgPool}) => {
        const user = await getUser(course.author_id, pgPool);
        return user.username;
      },
    },
    title: {
      type: GraphQLString,
      resolve: course => course.title,
    },
    body: {
      type: GraphQLString,
      resolve: course => course.body,
    },
    avatar: {
      type: GraphQLString,
      resolve: course => course.avatar,
    },
    createdAt: {
      type: GraphQLInt,
      resolve: course => course.created_at,
    },
    updatedAt: {
      type: GraphQLInt,
      resolve: course => course.updated_at,
    },
    likes: {
      type: GraphQLList(GraphQLString),
      resolve: async (course, {}, {pgPool}) => {
        const likes = await getCourseLikes(course.id, pgPool);
        return likes.map(v => v.user_id);
      },
    },
    scores: {
      type: ScoresConnection,
      args: todosArgs,
      resolve: async (course, {after, before, first, last}, {pgPool}) => {
        try {
          const scores = await getCourseScores(course.id, pgPool);
          return connectionFromArray(scores, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
    // scores: {
    //   type: GraphQLList(GraphQLInt),
    //   resolve: async (course, {}, {pgPool}) => {
    //     const scores = await getCourseScores(course.id, pgPool);

    //     return scores.map(v => v.score);
    //   },
    // },
  },
  interfaces: [nodeInterface],
});

const {connectionType: CoursesConnection, edgeType: GraphQLCourseEdge} = connectionDefinitions({
  name: 'Course',
  nodeType: GraphQLCourse,
});

var GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    _id: {
      type: GraphQLString,
      resolve: user => user.id,
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    courses: {
      type: CoursesConnection,
      args: todosArgs,
      resolve: async (user, {after, before, first, last}, {pgPool}) => {
        try {
          const courses = await getCourses(user.id, pgPool);
          return connectionFromArray(courses, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
  interfaces: [nodeInterface],
});

const GraphQLCourses = new GraphQLObjectType({
  name: 'Courses',
  fields: {
    courses: {
      type: CoursesConnection,
      args: todosArgs,
      resolve: async (user, {after, before, first, last}, {pgPool}) => {
        try {
          const courses = await getAllCourses(pgPool);

          return connectionFromArray(courses, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
});

export {GraphQLUser, GraphQLCourse, GraphQLCourses, GraphQLCourseEdge, nodeField};
