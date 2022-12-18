import React from "react";
import { renderHook } from "@testing-library/react";
import useCartUserInfo from "../cart-user-info.hook";
import AuthContextProvider from "context/auth.context";
import { userDoLogin } from "utils/test-utils/userAuthentication-test-utils";
import {createWrapperCartStore} from "utils/test-utils/cartStore.test-utils";
import { Provider } from "react-redux";

describe("useCartUserInfo", () => {
  it("should get user from localStorage", () => {
    const { store } = createWrapperCartStore();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </Provider>
    );
    const { email, name } = userDoLogin();
    const { result } = renderHook(useCartUserInfo, { wrapper });
    expect(result.current.user?.email).toBe(email);
    expect(result.current.user?.name).toBe(name);
  });
  it("should get user address if user filled it before", () => {
    const { store } = createWrapperCartStore();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </Provider>
    );
    userDoLogin();
    const userAddress = store.getState().cart.userAddress;
    const { result } = renderHook(useCartUserInfo, { wrapper });
    expect(result.current.address).toBe(userAddress);
  });
});
