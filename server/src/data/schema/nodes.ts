import {GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';
import {
  Course,
  Score,
  Streak,
  User,
  getAllStreaks,
  getCourse,
  getCourseLikes,
  getCourseScores,
  getCourses,
  getScore,
  getUser,
} from '../database';
import GraphQLScore, {ScoresConnection} from './nodes/Score';
import GraphQLStreak, {StreaksConnection} from './nodes/Streak';
import GraphQLCourse, {CoursesConnection} from './nodes/Course';

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId, {pgPool}) => {
    const {type, id} = fromGlobalId(globalId);

    if (type === 'Course') {
      return getCourse(id, pgPool);
    } else if (type === 'User') {
      return getUser(id, pgPool);
    } else if (type === 'Score') {
      const [userId, courseId] = id.split(':');
      return getScore(userId, courseId, pgPool);
    }

    return null;
  },
  obj => {
    if (obj instanceof Course) {
      return GraphQLCourse;
    } else if (obj instanceof User) {
      return GraphQLUser;
    } else if (obj instanceof Score) {
      return GraphQLScore;
    }

    return null;
  },
);

const coursesArgs = {
  ...connectionArgs,
};

var GraphQLUser = new GraphQLObjectType<User>({
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
    score: {
      type: GraphQLScore,
      args: {
        courseId: {
          type: GraphQLString,
        },
      },
      resolve: async (user, {courseId}, {pgPool}) => {
        return await getScore(user.id, courseId, pgPool);
      },
    },
    courses: {
      type: CoursesConnection,
      args: coursesArgs,
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

const GraphQLCourses = new GraphQLObjectType<Course[]>({
  name: 'Courses',
  fields: {
    node: nodeField,
    data: {
      type: CoursesConnection,
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

const GraphQLScores = new GraphQLObjectType<Score>({
  name: 'Scores',
  fields: {
    node: nodeField,
    data: {
      type: ScoresConnection,
      args: {
        ...connectionArgs,
        wordsCount: {type: GraphQLInt},
        interval: {type: GraphQLInt},
      },
      resolve: async (scores, {after, before, first, last}) =>
        connectionFromArray(scores, {after, before, first, last}),
    },
  },
});

const GraphQLStreaks = new GraphQLObjectType<Streak>({
  name: 'Streaks',
  fields: {
    node: nodeField,
    data: {
      type: StreaksConnection,
      args: coursesArgs,
      resolve: async (parent, {after, before, first, last}, {pgPool}) => {
        try {
          const streaks = await getAllStreaks(pgPool);
          return connectionFromArray(streaks, {after, before, first, last});
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
});

export {GraphQLCourse, GraphQLCourses, GraphQLScores, GraphQLStreaks, GraphQLUser, nodeField, nodeInterface};
