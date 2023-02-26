"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const schema_1 = require("./data/schema");
const express_graphql_1 = require("express-graphql");
const pg = require('pg');
const SERVER_PORT = 3000;
const pgPool = new pg.Pool({
    user: 'postgres',
    host: '192.168.1.172',
    database: 'recognize',
    password: 'newPassword',
    port: 5432,
});
express()
    .use(cors())
    .use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.schema,
    graphiql: true,
    context: { pgPool }
}))
    .listen(SERVER_PORT, console.log(`Server is listenig to ${SERVER_PORT} port`));
//# sourceMappingURL=server.js.map