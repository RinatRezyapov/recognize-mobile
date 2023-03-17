import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { getUser, removeCourse } from '../../database';
import { GraphQLUser } from '../nodes';

const RemoveCourseMutation = mutationWithClientMutationId({
    name: 'RemoveCourse',
    inputFields: {
      id: {type: new GraphQLNonNull(GraphQLInt)},
      userId: {type: new GraphQLNonNull(GraphQLString)},
    },
    outputFields: {
      deletedCourseId: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: ({id}, {}, { pgPool }): string => id,
      },
      user: {
        type: new GraphQLNonNull(GraphQLUser),
        resolve: ({userId}, {}, { pgPool }) => getUser(userId, pgPool)
      },
    },
    mutateAndGetPayload: async ({ id, userId }, { pgPool }) => {
        await removeCourse(pgPool, id);

        return { id, userId };
    },
});

export { RemoveCourseMutation };
