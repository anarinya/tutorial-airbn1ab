require("dotenv").config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import { connectDatabase } from "./db";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./graphql";

const mount = async (app: Application) => {
  const db = await connectDatabase();

  app.use(bodyParser.json({ limit: "2mb" }));
  app.use(cookieParser(process.env.SECRET));
  app.use(compression());
  app.use(express.static(`${__dirname}/client`));

  app.get("/*", (_req, res) => res.sendFile(`${__dirname}/client/index.html`));

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req, res }) => ({ db, req, res })
  });

  server.applyMiddleware({ app, path: "/api" });

  app.listen(process.env.PORT, async () => {
    console.log(`[app] : http://localhost:${process.env.PORT}`);
  });
};

mount(express());