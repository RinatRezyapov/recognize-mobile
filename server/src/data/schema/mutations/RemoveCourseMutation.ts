import {GraphQLID, GraphQLNonNull} from 'graphql';
import {fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {deleteCourseLikes, deleteCourseScores, removeCourse} from '../../database';

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
    const localId = fromGlobalId(id).id;
    await deleteCourseLikes(localId, pgPool);
    await deleteCourseScores(localId, pgPool);
    await removeCourse(localId, pgPool);

    return {id};
  },
});

export {RemoveCourseMutation};
