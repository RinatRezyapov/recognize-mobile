import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {addCourse, getCourse, getCourses, getUser} from '../../database';
import GraphQLUser from '../nodes/User';

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
      type: (() => require('../nodes/Course').default.edgeType)(),
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
    errors: {
      type: GraphQLList(GraphQLString),
      resolve: ({errors}) => errors,
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
        errors: ['You cannot create more that 2 courses'],
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
