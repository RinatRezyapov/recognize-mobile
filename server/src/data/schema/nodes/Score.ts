import {GraphQLFloat, GraphQLObjectType, GraphQLString} from 'graphql';
import {connectionDefinitions, globalIdField} from 'graphql-relay';
import {Score, getCourse, getUser} from '../../database';

export const GraphQLScore = new GraphQLObjectType<Score>({
  name: 'Score',
  fields: {
    id: globalIdField('Score', score => score.user_id + ':' + score.course_id),
    _id: {
      type: GraphQLString,
      resolve: score => score.userId + ':' + score.courseId,
    },
    userId: {
      type: GraphQLString,
      resolve: async score => score.userId,
    },
    username: {
      type: GraphQLString,
      resolve: async (score, {}, {pgPool}) => {
        const user = await getUser(score.userId, pgPool);
        return user.username;
      },
    },
    courseId: {
      type: GraphQLString,
      resolve: async score => score.courseId,
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
        const course = await getCourse(score.courseId, pgPool);
        return course.title;
      },
    },
  },
});

export default connectionDefinitions({
  name: 'Score',
  nodeType: GraphQLScore,
});
