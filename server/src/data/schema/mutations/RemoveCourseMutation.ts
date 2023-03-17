import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';
import { removeCourse } from '../../database';

const RemoveCourseMutation = mutationWithClientMutationId({
  name: 'RemoveCourse',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    deletedCourseId: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }, { }, { pgPool }): string => id,
    },
  },
  mutateAndGetPayload: async ({ id }, { pgPool }) => {
    const localId = fromGlobalId(id).id;

    await removeCourse(pgPool, localId);

    return { id };
  },
});

export { RemoveCourseMutation };

