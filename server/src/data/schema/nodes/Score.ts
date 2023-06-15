import {GraphQLFloat, GraphQLObjectType, GraphQLString} from 'graphql';
import {connectionDefinitions, globalIdField} from 'graphql-relay';
import {getCourse, getUser} from '../../database';

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

export default connectionDefinitions({
  name: 'Score',
  nodeType: GraphQLScore,
});
