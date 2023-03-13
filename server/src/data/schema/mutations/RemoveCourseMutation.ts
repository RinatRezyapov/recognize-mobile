import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { removeCourse } from '../../database';

const RemoveCourseMutation = mutationWithClientMutationId({
    name: 'RemoveCourse',
    inputFields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    mutateAndGetPayload: async ({ id }, { pgPool }) => {
        console.log(id)
        await removeCourse(pgPool, id);

        return { id };
    },
});

export { RemoveCourseMutation };
