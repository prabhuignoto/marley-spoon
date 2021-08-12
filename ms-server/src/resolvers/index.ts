import { Request } from "express";
import fetcher from "../data-fetcher";

const resolvers = {
  Query: {
    getAllRecipes: async () => {
      const recipes = await fetcher.getAllRecipes();

      return recipes.map((recipe) => {
        const { id, createdAt, updatedAt } = recipe.sys;
        const { title, calories, description, photo } = recipe.fields;
        return {
          id,
          createdAt,
          updatedAt,
          title,
          calories,
          description,
          photoId: photo.sys.id,
          chefId: recipe.fields.chef ? recipe.fields.chef.sys.id : "",
          tags: recipe.fields.tags
            ? recipe.fields.tags.map((tag) => tag.sys.id)
            : [],
        };
      });
    },
    getRecipe: async (req: Request, query: any) => {
      const recipe = await fetcher.getRecipe(query.id);

      const { id, createdAt, updatedAt } = recipe.sys;
      const { title, calories, description, photo } = recipe.fields;
      return {
        id,
        createdAt,
        updatedAt,
        title,
        calories,
        description,
        photoId: photo.sys.id,
        chefId: recipe.fields.chef ? recipe.fields.chef.sys.id : "",
        tags: recipe.fields.tags
          ? recipe.fields.tags.map((tag) => tag.sys.id)
          : [],
      };
    },
    getAssetById: async (req: Request, query: any) => {
      const asset = await fetcher.getAssetById(query.id);

      const { sys, fields } = asset;

      return {
        id: sys.id,
        title: fields.title,
        url: fields.file.url,
        size: fields.file.details.size,
        fileName: fields.file.fileName,
        width: fields.file.details.image.width,
        height: fields.file.details.image.height,
        contentType: fields.file.contentType,
      };
    },
    getChefName: async (req: Request, query: any) => {
      const chef = await fetcher.getChefName(query.id);

      return chef;
    },
  },
};

export default resolvers;
