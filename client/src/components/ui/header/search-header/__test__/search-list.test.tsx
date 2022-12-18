import { screen, render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { ISearchItem } from "../search-header.type";
import SearchList from "../search-list.component";
describe("SearchList", () => {
  describe("get products", () => {
    it("should render list of productItems", async () => {
      const results = [
        {
          title: "Iphone 13",
          _id: "abc3d",
          category: "Phones",
          price: 350000,
          imgCover: "test.img",
          slug: "iphone/13",
        },
      ];

      render(<SearchList results={results} />);
      const listEls = screen.getAllByRole("listitem");
      expect(listEls).toHaveLength(results.length);
    });
    it("should not render list of productItems when nothing found", async () => {
      const results: ISearchItem[] = [];

      render(<SearchList results={results} />);
      const listEls = screen.queryAllByRole("listitem");
      expect(listEls).toHaveLength(results.length);
    });
  });
});
