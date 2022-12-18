import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  createWrapperCartStore,
  getCartStateTest,
} from "utils/test-utils/cartStore.test-utils";
import CartList from "../cart-list.component";

describe("CartList", () => {
  it("should render a list of cart item", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = getCartStateTest().cart;
    render(
      <BrowserRouter>
        <CartList />
      </BrowserRouter>,
      { wrapper }
    );
    const listEl = screen.getByTestId("cart-list");
    expect(within(listEl).getAllByTestId(/cart-item-container-/)).toHaveLength(
      cartState.length
    );
  });
});
