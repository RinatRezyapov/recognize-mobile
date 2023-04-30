import {mutationWithClientMutationId, cursorForObjectInConnection, fromGlobalId} from 'graphql-relay';

import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {GraphQLCourseEdge, GraphQLUser} from '../nodes';

import {addCourse, getCourse, getCourses, getUser} from '../../database';

const AddCourseMutation = mutationWithClientMutationId({
  name: 'AddCourse',
  inputFields: {
    authorId: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: new GraphQLNonNull(GraphQLString)},
    avatar: {type: new GraphQLNonNull(GraphQLString)},
    createdAt: {type: new GraphQLNonNull(GraphQLString)},
    updatedAt: {type: new GraphQLNonNull(GraphQLString)},
  },
  outputFields: {
    courseEdge: {
      type: GraphQLCourseEdge,
      resolve: async ({addedCourse, authorId}, {}, {pgPool}) => {
        if (!addedCourse) return;
        const course = await getCourse(addedCourse.id, pgPool);
        const courses = await getCourses(authorId, pgPool);
        return {
          cursor: cursorForObjectInConnection([...courses], course),
          node: course,
        };
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({error}) => error,
    },
    user: {
      type: new GraphQLNonNull(GraphQLUser),
      resolve: async ({userId}, {}, {pgPool}) => {
        return await getUser(userId, pgPool);
      },
    },
  },
  mutateAndGetPayload: async ({authorId, ...rest}, {pgPool}) => {
    const localAuthorId = fromGlobalId(authorId).id;
    const courses = await getCourses(localAuthorId, pgPool);
    if (courses.length >= 2) {
      return {
        authorId: localAuthorId,
        error: 'You cannot create more that 2 courses',
      };
    }

    const addedCourse = await addCourse(pgPool, localAuthorId, rest);
    return {
      addedCourse,
      authorId: localAuthorId,
    };
  },
});

export {AddCourseMutation};
