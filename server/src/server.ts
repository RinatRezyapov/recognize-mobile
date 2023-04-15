import * as express from 'express';
import * as cors from 'cors';
import {schema} from './data/schema';
import {graphqlHTTP} from 'express-graphql';
import {db} from './models/db';

const SERVER_PORT = 3000;

db.connect();

express()
  .use(cors())
  .use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: {pgPool: db},
    }),
  )
  .listen(SERVER_PORT, console.log(`Server is listenig to ${SERVER_PORT} port`));
