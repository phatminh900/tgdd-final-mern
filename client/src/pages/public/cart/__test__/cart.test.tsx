import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AuthContextProvider from "context/auth.context";

import { userDoLogin } from "utils/test-utils/userAuthentication-test-utils";

import Cart from "../cart.container";
import {
  createWrapperCartStore,
  getCartStateTest,
} from "utils/test-utils/cartStore.test-utils";
import formatCurrency from "utils/formatCurrency";
import { cartSliceAction } from "store/cart/cart-slice";

describe("Cart", () => {
  beforeEach(() => {
    userDoLogin();
    const { store } = createWrapperCartStore();
    store.dispatch(cartSliceAction.clearCart());
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
    const productInCartTest2 = {
      colors: ["Vàng ", "Tím"],
      currentColor: "Vàng ",
      currentColorImgCover:
        "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-1.jpg",
      discount: [],
      id: "62f5c5c7a9de879d1584122a",
      imgColorsCover: [
        "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-1.jpg",
        "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-2.jpg",
      ],
      link: "/phones/iPhone-11-128GB",
      price: 14990000,
      promotion: [],
      quantity: 1,
      title: "iPhone 11",
    };
    store.dispatch(cartSliceAction.addToCart(productInCartTest));
    store.dispatch(cartSliceAction.addToCart(productInCartTest2));
  });
  it("should render list of cart items", () => {
    const { wrapper } = createWrapperCartStore();
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </AuthContextProvider>,
      { wrapper }
    );
    const { cart } = getCartStateTest();
    const cartListEl = screen.getByTestId("cart-list");
    expect(
      within(cartListEl).getAllByTestId(/cart-item-container/)
    ).toHaveLength(cart.length);
  });
  describe("totalPrice", () => {
    it("should calculate total price based on all the products", () => {
      const { wrapper } = createWrapperCartStore();
      render(
        <AuthContextProvider>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </AuthContextProvider>,
        { wrapper }
      );
      const cart = getCartStateTest().cart;
      const cartSummaryEl = screen.getByTestId("cart-summary-container");
      const priceEl = within(cartSummaryEl).getByTestId("product-price");
      const totalPrice = cart.reduce(
        (total, product) => product.quantity * product.price + total,
        0
      );
      expect(priceEl).toHaveTextContent(
        new RegExp(`${formatCurrency(totalPrice)}`)
      );
    });
    it("should calculate total price again when the quantity of a product changed", async () => {
      const user = userEvent.setup();
      const { wrapper } = createWrapperCartStore();
      render(
        <AuthContextProvider>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </AuthContextProvider>,
        { wrapper }
      );
      const cart = getCartStateTest().cart;

      const cartItemEl = screen.getByTestId(
        `cart-item-container-${cart[0].id}`
      );

      const increaseBtn = within(cartItemEl).getByRole("button", { name: "+" });
      // increase
      await user.click(increaseBtn);
      const cartSummaryEl = screen.getByTestId("cart-summary-container");
      const priceEl = within(cartSummaryEl).getByTestId("product-price");
      const oldTotalPrice = cart.reduce(
        (total, product) => product.quantity * product.price + total,
        0
      );
      expect(priceEl).not.toHaveTextContent(
        new RegExp(`${formatCurrency(oldTotalPrice)}`)
      );
    });
  });
  describe("cart quantity", () => {
    it("should get the previous quantity", () => {
      const { wrapper } = createWrapperCartStore();
      render(
        <AuthContextProvider>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </AuthContextProvider>,
        { wrapper }
      );
      const { cart } = getCartStateTest();
      const listItemEls = screen.getAllByTestId(/cart-item-container/);
      listItemEls.forEach((listEl, i) => {
        expect(within(listEl).getByTestId(/quantity/)).toHaveTextContent(
          cart[i].quantity.toString()
        );
      });
    });
  });
  describe("remove CartItem", () => {
    it("should remove cart item", async () => {
      const user = userEvent.setup();
      const { wrapper } = createWrapperCartStore();

      render(
        <AuthContextProvider>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </AuthContextProvider>,
        { wrapper }
      );
      const cart = getCartStateTest().cart;
      const queryFirstCartItem = `cart-item-container-${cart[0].id}`;
      const firstCartItem = screen.getByTestId(queryFirstCartItem);
      const removeBtnEL = within(firstCartItem).getByRole("button", {
        name: "×",
      });
      await user.click(removeBtnEL);
      expect(screen.queryByTestId(queryFirstCartItem)).not.toBeInTheDocument();
    });
    it("should change total price when a cart item was removed", async () => {
      const user = userEvent.setup();
      const { store, wrapper } = createWrapperCartStore();
      const productInCartTest = {
        colors: ["Vàng ", "Tím"],
        currentColor: "Vàng ",
        currentColorImgCover:
          "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-1.jpg",
        discount: [],
        id: "62f5c5c7a9de879d1584122a",
        imgColorsCover: [
          "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-1.jpg",
          "/img/products//product-62f5c5c7a9de879d1584122a-1664249266475-img-color-cover-2.jpg",
        ],
        link: "/phones/iPhone-11-128GB",
        price: 14990000,
        promotion: [],
        quantity: 1,
        title: "iPhone 11",
      };
      store.dispatch(cartSliceAction.addToCart(productInCartTest));
      render(
        <AuthContextProvider>
          <BrowserRouter>
            <Cart />
          </BrowserRouter>
        </AuthContextProvider>,
        { wrapper }
      );
      const cart = getCartStateTest().cart;

      const queryCartItem = `cart-item-container-${productInCartTest.id}`;
      const cartItemEl = screen.getByTestId(queryCartItem);

      const removeBtnEL = within(cartItemEl).getByRole("button", {
        name: "×",
      });
      const cartSummaryEl = screen.getByTestId("cart-summary-container");
      const priceEl = within(cartSummaryEl).getByTestId("product-price");
      const oldTotalPrice = cart.reduce(
        (total, product) => product.quantity * product.price + total,
        0
      );
      //   after click
      await user.click(removeBtnEL);

        expect(priceEl).not.toHaveTextContent(
          new RegExp(`${formatCurrency(oldTotalPrice)}`)
        );
    });
  });
});
