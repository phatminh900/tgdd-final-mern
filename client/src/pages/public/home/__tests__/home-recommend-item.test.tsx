import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { it, expect, describe } from "vitest";
import HomeRecommendItem from "../home-recommend-item.component";

describe("HomeRecommendItem", () => {
  describe("render a product", () => {
    it("should render a product item based on data it got", () => {
      const product = {
        title: "Iphone",
        price: 3690000,
        ratingAverage: 4,
        ratingQuantity: 12,
        imgCover:
          "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
        category: "Phones",
        slug: "iPhone-13-Pro-Max-128GB",
        recommend: true,
        original: true,
      };
      render(<HomeRecommendItem {...product} />, { wrapper: BrowserRouter });

      const productImgEl = screen.getByRole("img");
      const productLinkEl = screen.getByRole("link");
      const productPriceEl = screen.getByTestId("product-price");
      const productRatingAvgEl = screen.getByTestId("product-rating-avg");
      const productQuantityEl = screen.getByTestId("product-rating-quantity");
      const expectUrlLink = `/${product.category.toLowerCase()}/${
        product.slug
      }`;

      expect(productLinkEl).toHaveAttribute("href", expectUrlLink);
      expect(productImgEl).toHaveAttribute("src", product.imgCover);
      expect(productPriceEl).toBeInTheDocument();
      expect(productRatingAvgEl).toBeInTheDocument();
      expect(productQuantityEl).toBeInTheDocument();
      //   const
      //   expect(productImgLink
    });
  });
});
