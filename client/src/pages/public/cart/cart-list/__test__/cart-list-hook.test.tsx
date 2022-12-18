import { renderHook } from "@testing-library/react";
import {createWrapperCartStore} from "utils/test-utils/cartStore.test-utils";

import useCartListHook from "../cart-list.hook";

describe("useCartHook", () => {
  it("should get a list of cart item", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = store.getState().cart.cart;

    const { result } = renderHook(useCartListHook, { wrapper });

    expect(result.current).toEqual(cartState);
  });
});
