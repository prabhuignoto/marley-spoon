import { config } from "dotenv";
import fetch from "node-fetch";
import logger from "./logger";
import { RecipeModel } from "./models";
import { Asset, ResponseModel } from "./models/response";

config();

const API_URL = `${process.env.api_url}/${process.env.space}/entries?access_token=${process.env.access_token}`;

interface DataFetcherInterface {
  getAllRecipes: () => Promise<RecipeModel[]>;
  getRecipeAssets: () => Promise<Asset[]>;
  getAssetById: (id: string) => Promise<Asset>;
  getChefName: (id: string) => Promise<String>;
  getRecipe: (id: string) => Promise<RecipeModel>;
}

export default {
  getAllRecipes: async function () {
    try {
      logger.info("fetching recipes...");
      const result = await fetch(API_URL, {
        method: "GET",
      });
      logger.info("recipes fetched...");

      const data = await (result.json() as Promise<ResponseModel>);

      return data.items.filter(
        (item) => item.sys.contentType?.sys.id === "recipe"
      );
    } catch (error) {
      logger.error({ message: error });
    }
  },

  async getRecipeAssets() {
    try {
      logger.info("fetching assets for recipes...");
      const result = await fetch(API_URL, {
        method: "GET",
      });
      logger.info("assets for recipes fetched...");

      const data = await (result.json() as Promise<ResponseModel>);

      return data.includes.Asset;
    } catch (error) {
      logger.error({ message: error });
    }
  },

  async getAssetById(id: string) {
    try {
      logger.info("fetching asset for recipe...");
      const result = await fetch(API_URL, {
        method: "GET",
      });
      logger.info("asset for recipe fetched...");

      const data = await (result.json() as Promise<ResponseModel>);

      return data.includes.Asset.find((asset) => asset.sys.id === id);
    } catch (error) {
      logger.error({ message: error });
    }
  },

  async getChefName(id: string) {
    try {
      logger.info("fetching asset for recipe...");
      const result = await fetch(API_URL, {
        method: "GET",
      });
      logger.info("asset for recipe fetched...");

      const data = await (result.json() as Promise<ResponseModel>);

      const asset = data.items.find((item) => item.sys.id === id);

      return asset?.fields.name;
    } catch (error) {
      logger.error({ message: error });
    }
  },

  async getRecipe(id: string) {
    try {
      logger.info("fetching asset for recipe...");
      const result = await fetch(API_URL, {
        method: "GET",
      });
      logger.info("asset for recipe fetched...");

      const data = await (result.json() as Promise<ResponseModel>);

      const recipe = data.items.find((item) => item.sys.id === id);

      return recipe;
    } catch (error) {
      logger.error({ message: error });
    }
  },
} as DataFetcherInterface;
