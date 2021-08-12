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
const dotenv_1 = require("dotenv");
const node_fetch_1 = __importDefault(require("node-fetch"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.config();
const API_URL = `${process.env.api_url}/${process.env.space}/entries?access_token=${process.env.access_token}`;
exports.default = {
    getAllRecipes: function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info("fetching recipes...");
                const result = yield node_fetch_1.default(API_URL, {
                    method: "GET",
                });
                logger_1.default.info("recipes fetched...");
                const data = yield result.json();
                return data.items.filter((item) => { var _a; return ((_a = item.sys.contentType) === null || _a === void 0 ? void 0 : _a.sys.id) === "recipe"; });
            }
            catch (error) {
                logger_1.default.error({ message: error });
            }
        });
    },
    getRecipeAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info("fetching assets for recipes...");
                const result = yield node_fetch_1.default(API_URL, {
                    method: "GET",
                });
                logger_1.default.info("assets for recipes fetched...");
                const data = yield result.json();
                return data.includes.Asset;
            }
            catch (error) {
                logger_1.default.error({ message: error });
            }
        });
    },
    getAssetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info("fetching asset for recipe...");
                const result = yield node_fetch_1.default(API_URL, {
                    method: "GET",
                });
                logger_1.default.info("asset for recipe fetched...");
                const data = yield result.json();
                return data.includes.Asset.find((asset) => asset.sys.id === id);
            }
            catch (error) {
                logger_1.default.error({ message: error });
            }
        });
    },
    getChefName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info("fetching asset for recipe...");
                const result = yield node_fetch_1.default(API_URL, {
                    method: "GET",
                });
                logger_1.default.info("asset for recipe fetched...");
                const data = yield result.json();
                const asset = data.items.find((item) => item.sys.id === id);
                return asset === null || asset === void 0 ? void 0 : asset.fields.name;
            }
            catch (error) {
                logger_1.default.error({ message: error });
            }
        });
    },
    getRecipe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.default.info("fetching asset for recipe...");
                const result = yield node_fetch_1.default(API_URL, {
                    method: "GET",
                });
                logger_1.default.info("asset for recipe fetched...");
                const data = yield result.json();
                const recipe = data.items.find((item) => item.sys.id === id);
                return recipe;
            }
            catch (error) {
                logger_1.default.error({ message: error });
            }
        });
    },
};
