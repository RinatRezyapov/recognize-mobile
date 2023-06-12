import {
  Course,
  Score,
  Streak,
  User,
  getAllCourses,
  getAllScores,
  getAllScoresWhere,
  getAllStreaks,
  getCourse,
  getCourseLikes,
  getCourseScores,
  getCourses,
  getScore,
  getUser,
} from '../database';
import {GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
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

const GraphQLScore = new GraphQLObjectType({
  name: 'Score',
  fields: {
    id: globalIdField('Score', score => score.user_id + ':' + score.course_id),
    _id: {
      type: GraphQLString,
      resolve: score => score.user_id + ':' + score.course_id,
    },
    userId: {
      type: GraphQLString,
      resolve: async score => score.user_id,
    },
    username: {
      type: GraphQLString,
      resolve: async (score, {}, {pgPool}) => {
        const user = await getUser(score.user_id, pgPool);
        return user.username;
      },
    },
    courseId: {
      type: GraphQLString,
      resolve: async score => score.course_id,
    },
    score: {
      type: GraphQLFloat,
      resolve: score => score.score,
    },
    sequence: {
      type: GraphQLString,
      resolve: score => score.sequence,
    },
    course: {
      type: GraphQLString,
      resolve: async (score, {}, {pgPool}) => {
        const course = await getCourse(score.course_id, pgPool);
        return course.title;
      },
    },
  },
});

const GraphQLStreak = new GraphQLObjectType({
  name: 'Streak',
  fields: {
    id: globalIdField('Streak', streak => streak.user_id + ':' + streak.course_id),
    _id: {
      type: GraphQLString,
      resolve: streak => streak.user_id + ':' + streak.course_id,
    },
    userId: {
      type: GraphQLString,
      resolve: async streak => streak.user_id,
    },
    username: {
      type: GraphQLString,
      resolve: async (streak, {}, {pgPool}) => {
        const user = await getUser(streak.user_id, pgPool);
        return user.username;
      },
    },
    courseId: {
      type: GraphQLString,
      resolve: async streak => streak.course_id,
    },
    streak: {
      type: GraphQLFloat,
      resolve: streak => streak.streak,
    },
    course: {
      type: GraphQLString,
      resolve: async (streak, {}, {pgPool}) => {
        const course = await getCourse(streak.course_id, pgPool);
        return course.title;
      },
    },
  },
});

const {connectionType: ScoresConnection, edgeType: GraphQLScoreEdge} = connectionDefinitions({
  name: 'Score',
  nodeType: GraphQLScore,
});

const {connectionType: StreaksConnection, edgeType: GraphQLStreakEdge} = connectionDefinitions({
  name: 'Streak',
  nodeType: GraphQLStreak,
});

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

const {connectionType: CoursesConnection, edgeType: GraphQLCourseEdge} = connectionDefinitions({
  name: 'Course',
  nodeType: GraphQLCourse,
});

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

export {
  GraphQLUser,
  GraphQLCourse,
  GraphQLCourses,
  GraphQLCourseEdge,
  GraphQLScoreEdge,
  GraphQLScores,
  GraphQLStreakEdge,
  GraphQLStreaks,
  nodeField,
};
