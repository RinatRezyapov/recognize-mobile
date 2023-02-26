"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const CourseQuery_1 = require("./queries/CourseQuery");
const UserQuery_1 = require("./queries/UserQuery");
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: UserQuery_1.UserQuery,
        node: CourseQuery_1.nodeField
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query,
});
//# sourceMappingURL=index.js.map