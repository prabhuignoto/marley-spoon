"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const routes_1 = __importDefault(require("./routes"));
const resolvers_1 = __importDefault(require("./resolvers"));
const startServer = function () {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.config();
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: typeDefs_1.default,
            resolvers: resolvers_1.default,
        });
        yield server.start();
        const app = express_1.default();
        server.applyMiddleware({ app });
        app.use(routes_1.default);
        app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
    });
};
startServer();
