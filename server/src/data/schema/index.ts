import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { AddCourseMutation } from './mutations/AddCourseMutation';
import { RemoveCourseMutation } from './mutations/RemoveCourseMutation';
import { UpdateCourseMutation } from './mutations/UpdateCourseMutation';
import { nodeField } from './nodes';
import {UserQuery} from './queries/UserQuery';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    node:nodeField
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: AddCourseMutation,
    updateCourse: UpdateCourseMutation,
    removeCourse: RemoveCourseMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})