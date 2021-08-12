import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import express from "express";
import typeDefinitions from "./typeDefs";
import Router from "./routes";
import Resolvers from "./resolvers";

const startServer = async function () {
  config();

  const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers: Resolvers,
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.use(Router);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
