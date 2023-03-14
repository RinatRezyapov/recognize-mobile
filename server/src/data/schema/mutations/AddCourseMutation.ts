import {
  mutationWithClientMutationId,
  cursorForObjectInConnection,
} from 'graphql-relay';

import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourseEdge, GraphQLUser } from '../nodes';

import { addCourse, getCourse, getCourses, getUser } from '../../database';

const AddCourseMutation = mutationWithClientMutationId({
  name: 'AddCourse',
  inputFields: {
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    courseEdge: {
      type: new GraphQLNonNull(GraphQLCourseEdge),
      resolve: async ({ addedCourse, userId }, {}, { pgPool }) => {
        const course = await getCourse(addedCourse.id, pgPool);
        const courses = await getCourses(userId, pgPool);
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
  mutateAndGetPayload: async (data, { pgPool }) => {
    const addedCourse = await addCourse(pgPool, data);

    return {
      addedCourse, userId: data.authorId
    };
  },
});

export { AddCourseMutation };
