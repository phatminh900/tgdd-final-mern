import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Price from "../price.component";
import formatCurrency from "utils/formatCurrency";

describe("Price", () => {
  describe("render price component", () => {
    it("should render price component with price given", () => {
      const price = 100000;
      const formatPrice = formatCurrency(price);
      render(<Price price={price} />);

      const priceEl = screen.getByTestId(/product-price/i);
      expect(priceEl.textContent).toBe(`${formatPrice} ₫`);
  });
  });
});
