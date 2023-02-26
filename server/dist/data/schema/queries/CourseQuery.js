"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeInterface = exports.nodeField = exports.GraphQLCourse = void 0;
const database_1 = require("../../database");
const graphql_1 = require("graphql");
const graphql_relay_1 = require("graphql-relay");
const { nodeInterface, nodeField } = graphql_relay_1.nodeDefinitions((globalId, { pgPool }) => {
    const { type, id } = graphql_relay_1.fromGlobalId(globalId);
    return database_1.getCourse(id, pgPool);
}, (obj) => {
    console.log('hooooooooooo', obj);
    return GraphQLCourse;
});
exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;
const GraphQLCourse = new graphql_1.GraphQLObjectType({
    name: 'Course',
    fields: {
        id: graphql_relay_1.globalIdField('Course'),
        authorid: {
            type: graphql_1.GraphQLString,
            resolve: course => course.authorid,
        },
        title: {
            type: graphql_1.GraphQLString,
            resolve: course => course.title,
        },
        body: {
            type: graphql_1.GraphQLString,
            resolve: course => course.body,
        },
        created: {
            type: graphql_1.GraphQLInt,
            resolve: course => course.created,
        },
    },
    interfaces: [nodeInterface],
});
exports.GraphQLCourse = GraphQLCourse;
//# sourceMappingURL=CourseQuery.js.map