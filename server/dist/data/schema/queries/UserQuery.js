"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuery = void 0;
const graphql_1 = require("graphql");
const graphql_relay_1 = require("graphql-relay");
const CourseQuery_1 = require("./CourseQuery");
const database_1 = require("../../database");
const { connectionType: CoursesConnection, edgeType: GraphQLCourseEdge, } = graphql_relay_1.connectionDefinitions({
    name: 'Course',
    nodeType: CourseQuery_1.GraphQLCourse,
});
const GraphQLUser = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: {
        id: graphql_relay_1.globalIdField('User'),
        name: {
            type: graphql_1.GraphQLString,
            resolve: user => user.name
        },
        email: {
            type: graphql_1.GraphQLString,
            resolve: user => user.email
        },
        courses: {
            type: CoursesConnection,
            resolve: async (user, { after, before, first, last }, { pgPool }) => {
                try {
                    const courses = await database_1.getCourses(user.id, pgPool);
                    return graphql_relay_1.connectionFromArray(courses, { after, before, first, last });
                }
                catch (err) {
                    console.error(err);
                }
            }
        },
    },
    interfaces: [CourseQuery_1.nodeInterface],
});
const UserQuery = {
    type: GraphQLUser,
    args: {
        id: { type: graphql_1.GraphQLString },
    },
    resolve: (root, { id }, { pgPool }) => {
        return database_1.getUser(id, pgPool);
    }
};
exports.UserQuery = UserQuery;
//# sourceMappingURL=UserQuery.js.map