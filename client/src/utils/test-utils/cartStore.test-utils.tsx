import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "store/main.store";
import { cartSliceAction } from "store/cart/cart-slice";

const store = setupStore();
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
const userAddress = "183/3 Nguyễn Văn Đậu Bình Thạnh";
store.dispatch(cartSliceAction.setUserAddress({ address: userAddress }));
const createWrapperCartStore = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { wrapper, store };
};
const getCartStateTest = () => {
  return store.getState().cart;
};
export { createWrapperCartStore, getCartStateTest };
