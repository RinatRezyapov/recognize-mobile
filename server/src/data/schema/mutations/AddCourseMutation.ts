import {
  mutationWithClientMutationId,
  cursorForObjectInConnection,
  fromGlobalId,
} from 'graphql-relay';

import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourseEdge, GraphQLUser } from '../nodes';

import { addCourse, getCourse, getCourses, getUser } from '../../database';

const AddCourseMutation = mutationWithClientMutationId({
  name: 'AddCourse',
  inputFields: {
    authorId: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    courseEdge: {
      type: new GraphQLNonNull(GraphQLCourseEdge),
      resolve: async ({ addedCourse, authorId }, {}, { pgPool }) => {
        const course = await getCourse(addedCourse.id, pgPool);
        const courses = await getCourses(authorId, pgPool);
        return {
          cursor: cursorForObjectInConnection([...courses], course),
          node: course,
        };
      },
    },
    user: {
      type: new GraphQLNonNull(GraphQLUser),
      resolve: async ({ userId }, {}, { pgPool }) => {

        return await getUser(userId, pgPool)
      },
    },
  },
  mutateAndGetPayload: async ({authorId, ...rest}, { pgPool }) => {
    const localAuthorId = fromGlobalId(authorId).id;
    const addedCourse = await addCourse(pgPool, localAuthorId, rest);

    return {
      addedCourse, authorId: localAuthorId
    };
  },
});

export { AddCourseMutation };
