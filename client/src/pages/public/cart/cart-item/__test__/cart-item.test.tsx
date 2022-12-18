import React from "react";
import userEvent from "@testing-library/user-event";
import { act, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// We're using our own custom render function and not RTL's render.
import {
  renderWithProviders,
  WrapperTest,
} from "utils/test-utils/test-utils-redux-toolkit";
import CartItem from "../cart-item.container";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "store/main.store";
import { cartSliceAction } from "store/cart/cart-slice";
describe("CartItem", () => {
  const productInCartTest = {
    colors: ["Yellow", "Blue", "Green"],
    currentColor: "Blue",
    currentColorImgCover: "/img/phones/phone-blue",
    discount: [],
    id: "62f5b992c0d5d377f467d215",
    imgColorsCover: [
      "/img/phones/phone-blue",
      "/img/phones/phone-yellow",
      "/img/phones/phone-green",
    ],
    link: "/phones/iPhone-13-Pro-Max-128GB",
    price: 33990000,
    promotion: [],
    quantity: 2,
    title: "iPhone 13 Pro Max",
  };
  const store = setupStore();
  beforeEach(() => {
    store.dispatch(cartSliceAction.addToCart(productInCartTest));
  });
  it("should have a title an img a color list box a price el and a quantitybox", () => {
    renderWithProviders(
      <BrowserRouter>
        <CartItem {...productInCartTest} />
      </BrowserRouter>,
      { store }
    );
    const imgEl = screen.getByTestId("cart-item-img-cover");
    const price = screen.getByTestId("product-price");
    const cartColorList = screen.getByTestId("cart-item-color-list");
    expect(imgEl).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(cartColorList).toBeInTheDocument();
  });
  it("should increase the quantity box", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <CartItem {...productInCartTest} />
      </BrowserRouter>,
      { store }
    );

    const btnIncreaseEl = screen.getByRole("button", { name: "+" });
    const quantityEl = screen.getByTestId("quantity");
    await user.click(btnIncreaseEl);
    const prevQuantity = productInCartTest.quantity;
    expect(quantityEl).toHaveTextContent(`${prevQuantity + 1}`);
  });
  it("should decrease the quantity box", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <CartItem {...productInCartTest} />
      </BrowserRouter>,
      { store }
    );

    const btnDecreaseEl = screen.getByRole("button", { name: "–" });
    const quantityEl = screen.getByTestId("quantity");
    await user.click(btnDecreaseEl);
    const prevQuantity = productInCartTest.quantity;
    expect(quantityEl).toHaveTextContent(`${prevQuantity - 1}`);
  });
});
