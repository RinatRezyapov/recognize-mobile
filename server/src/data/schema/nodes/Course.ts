import {GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {connectionArgs, connectionDefinitions, connectionFromArray, globalIdField} from 'graphql-relay';
import {Course, getCourseLikes, getCourseScores, getUser} from '../../database';
import {ScoresConnection} from './Score';
import {nodeInterface} from '../nodes';

var GraphQLCourse = new GraphQLObjectType<Course>({
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
      resolve: course => course.authorId,
    },
    author: {
      type: GraphQLString,
      resolve: async (course, {}, {pgPool}) => {
        const user = await getUser(course.authorId, pgPool);
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
      resolve: course => course.createdAt,
    },
    updatedAt: {
      type: GraphQLInt,
      resolve: course => course.updatedAt,
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
      args: {...connectionArgs, courseId: {type: GraphQLID}},
      resolve: async (course, {after, before, first, last}, {pgPool}) => {
        try {
          const scores = await getCourseScores(course.id, pgPool);
          return connectionFromArray(scores, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
  interfaces: [nodeInterface],
});

export const {connectionType: CoursesConnection, edgeType: GraphQLCourseEdge} = connectionDefinitions({
  name: 'Course',
  nodeType: GraphQLCourse,
});

export default GraphQLCourse;
