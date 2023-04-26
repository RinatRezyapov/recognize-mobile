import {GraphQLID, GraphQLNonNull} from 'graphql';
import {mutationWithClientMutationId} from 'graphql-relay';
import {removeCourse} from '../../database';

const RemoveCourseMutation = mutationWithClientMutationId({
  name: 'RemoveCourse',
  inputFields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
  },
  outputFields: {
    deletedCourseId: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({id}, {}, {pgPool}): string => id,
    },
  },
  mutateAndGetPayload: async ({id}, {pgPool}) => {
    await removeCourse(pgPool, id);

    return {id};
  },
});

export {RemoveCourseMutation};
