import {GraphQLInt, GraphQLObjectType} from 'graphql';
import {connectionArgs, connectionFromArray} from 'graphql-relay';
import {Score} from '../../database';

const GraphQLScores = new GraphQLObjectType<Score>({
  name: 'Scores',
  fields: {
    node: (() => require('./nod').default.nodeField)(),
    data: {
      type: (() => require('./Score').default.connectionType)(),
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

export default GraphQLScores;
