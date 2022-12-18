import { act, renderHook } from "@testing-library/react";
import { ICartProductDocument } from "store/cart/cartProductDocument";
import {createWrapperCartStore} from "utils/test-utils/cartStore.test-utils";

import useCartItem from "../cart-item.hook";

const getProductCartInfo = (cart: ICartProductDocument[]) => {
  const productId = cart[0].id;
  const productQuantity = cart[0].quantity;
  const productCurrentColor = cart[0].currentColor;
  const productColors = cart[0].colors;
  return { productId, productQuantity, productCurrentColor, productColors };
};
describe("useCartItem", () => {
  it("should get prevQuantity and set quantity to it", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = store.getState().cart.cart;
    const productId = cartState[0].id;
    const productQuantity = cartState[0].quantity;
    const { result } = renderHook(
      () => useCartItem(productId, productQuantity),
      { wrapper }
    );
    expect(result.current.quantity).toBe(productQuantity);
  });
  it("should set the setIsOpenColor List to false when user choose another color", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = store.getState().cart.cart;
    const { productCurrentColor, productColors, productId, productQuantity } =
      getProductCartInfo(cartState);

    const { result, rerender } = renderHook(
      () => useCartItem(productId, productQuantity),
      { wrapper }
    );

    const productColorChosen = productColors[2];

    act(() => {
      result.current.changeCurrentColor(productColorChosen);
    });
    expect(result.current.isOpenColorList).toBe(false);
  });
  it("should toggle isOpenPromotion", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = store.getState().cart.cart;
    const { productId, productQuantity } = getProductCartInfo(cartState);

    const { result, rerender } = renderHook(
      () => useCartItem(productId, productQuantity),
      { wrapper }
    );

    act(() => {
      result.current.togglePromotionList();
    });
    expect(result.current.isOpenPromotionList).toBe(true);
    act(() => {
      result.current.togglePromotionList();
    });
    expect(result.current.isOpenPromotionList).toBe(false);
  });
  it("should change the quantity", () => {
    const { wrapper, store } = createWrapperCartStore();
    const cartState = store.getState().cart.cart;
    const { productId, productQuantity } = getProductCartInfo(cartState);

    const { result } = renderHook(
      () => useCartItem(productId, productQuantity),
      { wrapper }
    );
    const expectedQuantity = 5;
    act(() => {
      result.current.changeQuantityItem(expectedQuantity);
    });
    expect(result.current.quantity).toBe(expectedQuantity);
  });
});
