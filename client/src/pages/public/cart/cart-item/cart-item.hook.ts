import { useState, useEffect } from "react";
import { useAppDispatch } from "store/hooks.store";
import { cartSliceAction } from "store/cart/cart-slice";

const useCartItem = (id: string, prevQuantity: number) => {
  const [quantity, setQuantity] = useState(prevQuantity || 1);

  const [isOpenPromotionList, setIsOpenPromotionList] = useState(false);
  const [isOpenColorList, setIsOpenColorList] = useState(false);

  const dispatch = useAppDispatch();
  const changeCurrentColor = (color: string) => {
    dispatch(
      cartSliceAction.changeCurrentColorProduct({
        id,
        color,
      })
    );
    setIsOpenColorList(false);
  };
  const togglePromotionList = () => setIsOpenPromotionList((prev) => !prev);
  const removeItem = () => {
    dispatch(cartSliceAction.removeFromCart({ id }));
  };
  const changeQuantityItem = (quantity: number) => {
    setQuantity(quantity);
    dispatch(cartSliceAction.changeCurrentQuantityProduct({ id, quantity }));
  };
  const toggleColorList = () => setIsOpenColorList((prev) => !prev);

  return {
    quantity,
    changeQuantityItem,
    isOpenPromotionList,
    isOpenColorList,
    changeCurrentColor,
    togglePromotionList,
    removeItem,
    toggleColorList,
  };
};

export default useCartItem;
