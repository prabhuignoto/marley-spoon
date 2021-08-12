"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
  type Asset {
    id: String!
    title: String!
    url: String!
    size: String!
    fileName: String!
    width: Int!
    height: Int!
    contentType: String!
  }

  type Recipe {
    id: String!
    createdAt: String!
    updatedAt: String!
    title: String!
    photoId: String!
    calories: Int!
    description: String!
    chefId: String!
    tags: [String!]!
  }

  type Query {
    getAllRecipes: [Recipe!]!
    getAssetById(id: String): Asset
    getChefName(id: String): String
    getRecipe(id: String): Recipe
  }
`;
