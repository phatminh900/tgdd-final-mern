import React from "react";
import { useAppDispatch } from "store/hooks.store";
import useCartState from "store/cart/cart-slice.hook";
import { getItem, setItem } from "utils/browser-storage.util";
import { LocalStorageKey } from "app-constants/browser.constatnt";
import { cartSliceAction } from "store/cart/cart-slice";
let initial = true;
const useHeaderCart = () => {
  const cartState = useCartState();
  const dispatch = useAppDispatch();
  const cartProductsLength = cartState.cart.reduce(
    (totalPro, pro) => pro.quantity + totalPro,
    0
  );
  // whenever cart change update localStorage
  React.useEffect(() => {
    if (initial) {
      initial = false;
      const cartJSON = getItem(LocalStorageKey.CART);
      const cartState = cartJSON
        ? JSON.parse(cartJSON)
        : {
            cart: [],
            priceAfterApplyingDiscount: 0,
            discountCode: "",
            userAddress: "",
          };
      dispatch(cartSliceAction.loadCart(cartState));
      return;
    }
    setItem(LocalStorageKey.CART, cartState);
  }, [cartState, dispatch]);
  return {cartProductsLength}
};

export default useHeaderCart;
