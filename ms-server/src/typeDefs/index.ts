import { gql } from "apollo-server-express";

export default gql`
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
