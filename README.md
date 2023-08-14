# Postgres/GraphQL Example in a Monolambda
This example demonstrates how to create a GraphQL API using Apollo Server, Nexus, and Prisma. 
The API exposes a connection to a PostgreSQL database.

## Prerequisites
1. Node.js (12.x or higher)
2. npm (6.x or higher)
3. AWS Console/CLI

## Directory Structure
```
.
├── graphql
│   └── schema.ts
├── prisma
│   └── schema.prisma
├── sql
│   └── init.sql
├── src
│   └── index.js
├── package-lock.json
├── package.json
├── README.md
├── serverless.yml
├── tsconfig.json
└── .env
```

`/graphql/schema.ts` : A manually created schema that generates types & resolvers for relations in the database

`/prisma/schema.prisma` : An autogenerated file containing a prisma schema for quick conversion of GQL <-> SQL

`/sql/init.sql` : Builds relations & fills with seed data

`/src/index.ts` : Lambda handler that hosts the GraphQL API

`/serverless.yml` : AWS Template for deploying the lambda

`/.env` : Contains a database connection URL

## Handler Function
The Lambda function in this example uses the graphqlHandler function in `src/index.js` as the entry point.
This function handles requests to the PostgresSQL database over Apollo Server using Nexus/Prisma for schema 
management

## Getting Started
The following instructions walk through launching a PostgresSQL instance, 
generating a Prisma Schema, and deploying the lambda

### 1. Clone the repository & Install dependencies
```
  git clone https://github.com/devinobrien-css/pg-graphql-example.git

  cd pg-graphql-example

  npm i
```

### 2. Build the Postgres instance
#### a. Deploy the database
A deployed PostgresSQL database is required to run this demo. 
It can be set up through a database hosting solution like
[AWS RDS](https://aws.amazon.com/rds/) or alternatively, find 
a solution [here](https://www.prisma.io/dataguide/postgresql/5-ways-to-host-postgresql).

#### b. Create relations & Seed data
Use the SQL script located at `/sql/init` to create relations and seed data.

#### c. Update environment variable
Once hosted, create a `.env` file and add a field `DATABASE_URL` with an 
access url to the hosted instance


### 3. Set up Prisma/Nexus:
Introspect the database & generate Prisma client:

```
    npm run prisma
```

> This evaluates the postgres schema and outputs an intermediary (prisma) schema between SQL and GQL

### 4. Deploy the Lambda Function:
Once the database has been created and introspected, and the prisma schema generated, 
the lambda handler can be deployed to AWS:

```
    npm run deploy
```

Once deployed, visit the link included in the output. This will take you to Apollo Server 
where you can then invoke the `fetchIndividuals` query

## Environment Variables
`DATABASE_URL`: The connection URL to a Postgres database.

## Documentation
[AWS Serverless](https://docs.aws.amazon.com/serverless-application-model/index.html)

[Apollo Server Monolambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)

[Prisma Documentation](https://www.prisma.io/docs/concepts/components/prisma-client)

[Nexus Documentation](https://nexusjs.org/docs/api/introduction)

## Credits
[AWS](https://aws.amazon.com/)

[Apollo Server](https://www.apollographql.com/)

[Nexus](https://nexusjs.org/)

[Prisma](https://www.prisma.io/)

[Postgres](https://www.postgresql.org/)

## Contributing
Contributions are welcome! If you find any issues or want to add improvements, feel free to submit a pull request.
