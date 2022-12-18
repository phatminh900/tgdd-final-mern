import { NextFunction, Request, Response } from "express";
import Product from "models/product.model";
import catchAsync from "utils/catchAsync";

const findAllProducts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const allPhones = await Product.aggregate([
      {
        $lookup: {
          from: "phones",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },

      {
        $project: {
          _id: 1,
          title: "$product.title",
          price: "$product.price",
          ratingAverage: "$product.ratingAverage",
          ratingQuantity: "$product.ratingQuantity",
          imgCover: "$product.imgCover",
          category: "$product.category",
          slug: "$product.slug",
          original: "$product.original",
        },
      },
    ]);
    const allLaptops = await Product.aggregate([
      {
        $lookup: {
          from: "laptops",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },

      {
        $project: {
          _id: 1,
          title: "$product.title",
          price: "$product.price",
          ratingAverage: "$product.ratingAverage",
          ratingQuantity: "$product.ratingQuantity",
          imgCover: "$product.imgCover",
          category: "$product.category",
          slug: "$product.slug",
          original: "$product.original",
        },
      },
    ]);

    const allProducts = [...allPhones, ...allLaptops];

    res.status(200).json({
      status: "success",
      results: allProducts.length,
      data: allProducts,
    });
  }
);
const searchProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find({
    $or: [
      { title: { $regex: req.params.key, $options: "i" } },
      { slug: { $regex: req.params.key } },
    ],
  }).limit(5);
  res.status(200).json({
    status: "success",
    results: products.length,
    products,
  });
});
export { findAllProducts, searchProducts };
