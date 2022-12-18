import React, { useState } from "react";
import { useAuth } from "context/auth.context";
import { useAppSelector, useAppDispatch } from "store/hooks.store";
import { cartSliceAction } from "store/cart/cart-slice";
import useCartState from "store/cart/cart-slice.hook";
import { selectAppState } from "store/appState/app-state-slice";
const useCartUserInfo = () => {
  const user = useAuth()?.user;
  const dispatch = useAppDispatch();
  const appState = useAppSelector(selectAppState);
  const { userAddress } = useCartState();

  const [address, setAddress] = useState(userAddress || "");

  const setUserAddress = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(cartSliceAction.setUserAddress({ address: value }));
    setAddress(value);
  };
  return { user, address, setUserAddress, appState };
};

export default useCartUserInfo;
