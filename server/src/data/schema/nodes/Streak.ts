import {GraphQLFloat, GraphQLObjectType, GraphQLString} from 'graphql';
import {connectionDefinitions, globalIdField} from 'graphql-relay';
import {getCourse, getUser} from '../../database';

export const GraphQLStreak = new GraphQLObjectType({
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

export default connectionDefinitions({
  name: 'Streak',
  nodeType: GraphQLStreak,
});
