import {GraphQLObjectType} from 'graphql';
import {connectionArgs, connectionFromArray} from 'graphql-relay';
import {Streak, getAllStreaks} from '../../database';

const GraphQLStreaks = new GraphQLObjectType<Streak>({
  name: 'Streaks',
  fields: {
    node: (() => require('./nod').default.nodeField)(),
    data: {
      type: (() => require('./Streak').default.connectionType)(),
      args: connectionArgs,
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

export default GraphQLStreaks;
