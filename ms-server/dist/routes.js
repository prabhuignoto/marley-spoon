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
const express_1 = __importDefault(require("express"));
const data_fetcher_1 = __importDefault(require("./data-fetcher"));
const router = express_1.default.Router();
router.get("/recipes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield data_fetcher_1.default.getAllRecipes();
    res.json(data);
}));
router.get("/recipe-assets", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield data_fetcher_1.default.getRecipeAssets();
    res.json(data);
}));
router.get("/recipe-asset-by-id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.id) {
        const data = yield data_fetcher_1.default.getAssetById(req.query.id);
        res.json(data);
    }
}));
exports.default = router;
