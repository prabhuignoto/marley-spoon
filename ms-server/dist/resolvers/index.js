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
const data_fetcher_1 = __importDefault(require("../data-fetcher"));
const resolvers = {
    Query: {
        getAllRecipes: () => __awaiter(void 0, void 0, void 0, function* () {
            const recipes = yield data_fetcher_1.default.getAllRecipes();
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
        }),
        getRecipe: (req, query) => __awaiter(void 0, void 0, void 0, function* () {
            const recipe = yield data_fetcher_1.default.getRecipe(query.id);
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
        }),
        getAssetById: (req, query) => __awaiter(void 0, void 0, void 0, function* () {
            const asset = yield data_fetcher_1.default.getAssetById(query.id);
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
        }),
        getChefName: (req, query) => __awaiter(void 0, void 0, void 0, function* () {
            const chef = yield data_fetcher_1.default.getChefName(query.id);
            return chef;
        }),
    },
};
exports.default = resolvers;
