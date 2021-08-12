import express, { Request, Response } from "express";
import fetcher from "./data-fetcher";

const router = express.Router();

router.get("/recipes", async (req: Request, res: Response) => {
  const data = await fetcher.getAllRecipes();
  res.json(data);
});

router.get("/recipe-assets", async (req: Request, res: Response) => {
  const data = await fetcher.getRecipeAssets();
  res.json(data);
});

router.get(
  "/recipe-asset-by-id",
  async (req: Request<{}, {}, {}, { id: string }, {}>, res: Response) => {
    if (req.query.id) {
      const data = await fetcher.getAssetById(req.query.id);
      res.json(data);
    }
  }
);

export default router;
