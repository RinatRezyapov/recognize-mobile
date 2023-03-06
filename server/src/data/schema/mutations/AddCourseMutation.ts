import {
    cursorForObjectInConnection,
    mutationWithClientMutationId,
} from 'graphql-relay';

import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLCourse, } from '../nodes';

import { GraphQLUser } from '../queries/UserQuery';
import { addCourse, getCourse, getCourses, getUser } from '../../database';

const AddCourseMutation = mutationWithClientMutationId({
    name: 'AddCourse',
    inputFields: {
        authorId: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
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
    mutateAndGetPayload: async ({ text, authorId }, { pgPool }) => {

        const addedCourse = await addCourse(pgPool, { authorId: 1, title: 'Test', description: 'Desc', body: 'Hey ho', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });

        return { addedCourse, authorId };
    },
});

export { AddCourseMutation };