import express from 'express';
// import PrettyError from 'pretty-error';
import {
  printSchema,
} from 'graphql';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';
// import errors from './errors';

const app = express();

app.get('/graphql/schema', (req: any, res: any) => {
  res.type('text/plain').send(printSchema(schema));
});

app.use('/graphql', expressGraphQL(req => ({
  schema,
  // context: new Context(req),
  graphiql: process.env.NODE_ENV !== 'production',
  pretty: process.env.NODE_ENV !== 'production',
  formatError: (error: any) =>
  // errors.report(error.originalError || error);
    ({
      message: error.message,
      code: error.originalError && error.originalError.code,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path,
    })
  ,
})));

const server = app.listen(4000);

export default server;

export {
  app,
};
