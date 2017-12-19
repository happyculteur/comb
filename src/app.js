import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import schema from './graphql/schema';

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const port = config.get('server.port');
const server = app.listen(port);

export default server;

export {
  app,
};
