import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { removeCourse } from '../../database';

const RemoveCourseMutation = mutationWithClientMutationId({
    name: 'RemoveCourse',
    inputFields: {
        courseId: { type: new GraphQLNonNull(GraphQLInt) },
    },
    mutateAndGetPayload: async ({ courseId }, { pgPool }) => {
        await removeCourse(pgPool, courseId);

        return { courseId };
    },
});

export { RemoveCourseMutation };
