import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { nodeField } from './nodes';
import { CourseQuery } from './queries/CourseQuery';
import {UserQuery} from './queries/UserQuery';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    course: CourseQuery,
    node:nodeField
  }
})

export const schema = new GraphQLSchema({
  query: Query,
})