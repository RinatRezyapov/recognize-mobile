import {cursorForObjectInConnection, fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';

import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import {getCourse, getCourses, updateCourse} from '../../database';

const UpdateCourseMutation = mutationWithClientMutationId({
  name: 'UpdateCourse',
  inputFields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: new GraphQLNonNull(GraphQLString)},
  },
  outputFields: {
    courseEdge: {
      type: new GraphQLNonNull((() => require('../nodes/Course').default.edgeType)()),
      resolve: async ({id}, {}, {pgPool}) => {
        const course = await getCourse(id, pgPool);
        const courses = await getCourses(id, pgPool);
        return {
          cursor: cursorForObjectInConnection([...courses], course),
          node: course,
        };
      },
    },
  },
  mutateAndGetPayload: async ({id, ...data}, {pgPool}) => {
    const localId = fromGlobalId(id).id;
    await updateCourse(localId, data, pgPool);

    return {id: localId};
  },
});

export {UpdateCourseMutation};
