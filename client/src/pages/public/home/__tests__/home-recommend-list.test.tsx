import { screen, render, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { it, expect, describe } from "vitest";
import HomeRecommendList from "../home-recommend-list.component";
import { IProductDocument } from "interfaces/allProductsType.interface";

describe("HomeRecommendItem", () => {
  describe("render  products", () => {
    it("should render list of product items", () => {
      const products: IProductDocument[] = [
        {
          title: "Iphone 13 Pro Max",
          price: 3690000,
          ratingAverage: 4,
          ratingQuantity: 12,
          imgCover:
            "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
          category: "Phones",
          slug: "iPhone-13-Pro-Max-128GB",
          recommend: true,
          original: true,
          _id: "id312",
        },
        {
          title: "Iphone 11 Pro Max",
          price: 2690000,
          ratingAverage: 4,
          ratingQuantity: 12,
          imgCover:
            "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847497-cover.jpg",
          category: "Phones",
          slug: "iPhone-11-Pro-Max-128GB",
          recommend: true,
          original: true,
          _id: "id3142",
        },
      ];
      render(<HomeRecommendList products={products} />, {
        wrapper: BrowserRouter,
      });
      const productsContainerEl = screen.getByRole("list");
      expect(within(productsContainerEl).getAllByRole("listitem")).toHaveLength(
        products.length
      );
    });
  });
});
