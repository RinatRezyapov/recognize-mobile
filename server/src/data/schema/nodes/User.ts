import {GraphQLObjectType, GraphQLString} from 'graphql';
import {connectionArgs, connectionFromArray, globalIdField} from 'graphql-relay';
import {User, getCourses, getScore} from '../../database';
import GraphQLScore from './Score';

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
      type: (() => require('./Course').default.connectionType)(),
      args: connectionArgs,
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
  interfaces: [(() => require('./nod').default.nodeInterface)()],
});

export default GraphQLUser;
