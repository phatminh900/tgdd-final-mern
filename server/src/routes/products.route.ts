import express from "express";
import {
  createProductHandler,
  getAllProductsHandler,
  deleteProductHandler,
} from "controllers/product.controller";
import { protect } from "middlewares/protect.middleware";

import Product from "models/product.model";
import {
  findAllProducts,
  searchProducts,
} from "controllers/allProduct.controller";

const router = express.Router();
findAllProducts;
router.get("/", findAllProducts);

router.get("/search/:key", searchProducts);
router.post("/", protect, createProductHandler(Product));
router.delete("/:id", deleteProductHandler(Product));

export default router;
