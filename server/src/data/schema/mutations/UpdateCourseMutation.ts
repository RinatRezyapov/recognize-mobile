import {
    mutationWithClientMutationId
} from 'graphql-relay';

import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourse } from '../nodes';

import { getCourse, getUser, updateCourse } from '../../database';
import { GraphQLUser } from '../queries/UserQuery';

const UpdateCourseMutation = mutationWithClientMutationId({
    name: 'UpdateCourse',
    inputFields: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
        courseEdge: {
            type: new GraphQLNonNull(GraphQLCourse),
            resolve: ({ addedCourse }, { }, { pgPool }) => {
                return getCourse(addedCourse.id, pgPool)
            },
        },
        user: {
            type: new GraphQLNonNull(GraphQLUser),
            resolve: async ({ userId }, { pgPool }) => await getUser(userId, pgPool),
        },
    },
    mutateAndGetPayload: async (data, { pgPool }) => {
        const addedCourse = await updateCourse(pgPool, data);

        return { addedCourse };
    },
});

export { UpdateCourseMutation };
