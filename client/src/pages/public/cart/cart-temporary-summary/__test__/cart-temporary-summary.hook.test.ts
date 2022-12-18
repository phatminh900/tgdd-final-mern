import { renderHook, act } from "@testing-library/react";
import {createWrapperCartStore} from "utils/test-utils/cartStore.test-utils";

import useCartTemporarySummary from "../cart-temporary-summary.hook";

describe("useCartTemporarySummary", () => {
  it("should calculate totalPrice properly  and return", () => {
    const { wrapper, store } = createWrapperCartStore();
    const { result } = renderHook(useCartTemporarySummary, { wrapper });
    const cartState = store.getState().cart.cart;
    let total = 0;
    for (let i = 0; i < cartState.length; i++) {
      total += cartState[i].quantity * cartState[i].price;
    }
    expect(result.current.totalPrice).toBe(total);
  });
  it("should calculate totalProducts properly  and return", () => {
    const { wrapper, store } = createWrapperCartStore();
    const { result } = renderHook(useCartTemporarySummary, { wrapper });
    const cartState = store.getState().cart.cart;
    let total = 0;
    for (let i = 0; i < cartState.length; i++) {
      total += cartState[i].quantity;
    }
    expect(result.current.totalProducts).toBe(total);
  });
});
