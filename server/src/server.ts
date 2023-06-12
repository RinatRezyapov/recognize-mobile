import * as express from 'express';
import * as cors from 'cors';
import {schema} from './data/schema';
import {graphqlHTTP} from 'express-graphql';
import {Pool} from 'pg';

const SERVER_PORT = 3000;

const pgPool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'recognize',
  password: 'newPassword',
  port: 5432,
});

express()
  .use(cors())
  .use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: {pgPool},
    }),
  )
  .listen(SERVER_PORT, console.log(`Server is listenig to ${SERVER_PORT} port`));
