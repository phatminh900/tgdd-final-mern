import { screen, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, describe, vi } from "vitest";
import SearchHeader from "../search-header.container";
import axios from "axios";
describe("SearchHeader", () => {
  describe("type in input", () => {
    
    const products = [
      {
        category: "laptops",
        imgCover:
          "/img/products/product-631d57f5a968584eed65bea8-1663230361813-cover.jpg",
        original: true,
        price: 27490000,
        ratingAverage: 0,
        ratingQuantity: 0,
        recommend: true,
        slug: "Laptop-Apple-MacBook-Air-M1-2020-256GB",
        title: "Laptop Apple MacBook Air M1 2020",
        _id: "631d57f5a968584eed65bea8",
      },
      {
        category: "laptops",
        imgCover:
          "/img/products/product-631d57f5a968584eed65bea8-1663230361813-cover.jpg",
        original: true,
        price: 3490000,
        ratingAverage: 0,
        ratingQuantity: 0,
        recommend: true,
        slug: "Laptop-Apple-MacBook-Air-M1-2021-256GB",
        title: "Laptop Apple MacBook Air M1 2021",
        _id: "631d57f5a968584eed65bea4",
      },
    ];
    const responseData = {
      data: {
        products,
      },
    };
    it("should make a request to find product when typing", async () => {
      const user = userEvent.setup();

      vi.spyOn(axios, "get").mockResolvedValue(responseData);

      render(<SearchHeader className="test" />);
      // const searchTerms = "macbook";
      const inputEl = screen.getByPlaceholderText(/What are you looking for?/i);
      const searchTerm="iphone"
      // // @ts-ignore
      await waitFor(async () => {
        await user.type(inputEl,searchTerm );
      });

      // //@ts-ignore
      const listEl = await screen.findByRole("list");

      const listItemsEl = await within(listEl).findAllByRole("listitem");
      expect(listItemsEl).toHaveLength(products.length);
    });
    it('should render input with what user typed',async()=>{
      const user=userEvent.setup()
      render(<SearchHeader className="test"/>)
      const inputEl=screen.getByPlaceholderText(/What are you looking for?/i)
      const searchTerm="iphone"
      await waitFor(async()=>await user.type(inputEl,searchTerm))

      expect((inputEl as HTMLInputElement).value).toBe(searchTerm)
    })
    
  });
});
