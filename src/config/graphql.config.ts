import { join } from 'node:path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { CORS } from './cors.config';

const graphqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
  debug: true,
  playground: true,
  // subscriptions: {
  //   'graphql-ws': true,
  //   'subscriptions-transport-ws': true,
  // },
  cors: CORS,
};

export default graphqlConfig;
