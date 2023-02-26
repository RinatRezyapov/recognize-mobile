import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './queries/CourseQuery';
import {UserQuery} from './queries/UserQuery';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    node:nodeField
  }
})

export const schema = new GraphQLSchema({
  query: Query,
})