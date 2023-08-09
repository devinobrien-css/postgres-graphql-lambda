import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client'
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { schema } from '../graphql/schema';

export const prisma = new PrismaClient();
const server = new ApolloServer({
    schema,
    introspection: true,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server, {
    context: async() => prisma
});