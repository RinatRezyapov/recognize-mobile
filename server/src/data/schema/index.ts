import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { AddCourseMutation } from './mutations/AddCourseMutation';
import { RemoveCourseMutation } from './mutations/RemoveCourseMutation';
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: AddCourseMutation,
    removeCourse: RemoveCourseMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})