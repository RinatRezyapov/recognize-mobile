import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
} from 'graphql-relay';

import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourse, } from '../nodes';

import { GraphQLUser } from '../queries/UserQuery';
import { addCourse, getCourse, getCourses, getUser } from '../../database';

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
            resolve: async ({addedCourse, author_id, clientMutationId}, {}, {pgPool}) => {
        
                const course = await getCourse(addedCourse.id, pgPool);
                const courses = await getCourses(addedCourse.author_id, pgPool);

                return {
                    cursor: cursorForObjectInConnection([...courses], course),
                    node: course,
                };
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