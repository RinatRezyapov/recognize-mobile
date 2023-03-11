import {
    mutationWithClientMutationId
} from 'graphql-relay';

import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourse } from '../nodes';

import { addCourse, getCourse, getUser } from '../../database';
import { GraphQLUser } from '../queries/UserQuery';

const AddCourseMutation = mutationWithClientMutationId({
    name: 'AddCourse',
    inputFields: {
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
        updatedAt: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
        courseEdge: {
            type: new GraphQLNonNull(GraphQLCourse),
            resolve: async ({ addedCourse }, { }, { pgPool }) => {
                return getCourse(addedCourse.id, pgPool)
            },
        },
        user: {
            type: new GraphQLNonNull(GraphQLUser),
            resolve: async ({ userId }, { pgPool }) => await getUser(userId, pgPool),
        },
    },
    mutateAndGetPayload: async (data, { pgPool }) => {
        const addedCourse = await addCourse(pgPool, data);

        return { addedCourse, authorId: data.authorId };
    },
});

export { AddCourseMutation };
