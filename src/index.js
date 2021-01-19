import { PORT } from './config';
import apollo from './apollo';
import app from './express';

async function start() {
  apollo.applyMiddleware({ app }); // apply app middleware to apollo server

  // listen on port and log start up url
  app.listen({ port: PORT }, () =>
    console.log(
      `restAPI: http://localhost:${PORT}/api\nGraphQL: http://localhost:${
        PORT + apollo.graphqlPath
      }\n`,
    ),
  );
}

if (process.env.NODE_ENV !== 'test') start();
