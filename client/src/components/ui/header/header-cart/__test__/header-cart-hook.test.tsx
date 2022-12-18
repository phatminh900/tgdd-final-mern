import { screen, render, renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createWrapperCartStore } from "utils/test-utils/cartStore.test-utils";
import useHeaderCart from "../header-cart.hook";

describe("useHeaderCart", () => {
  it("should render the quantity of cart item", () => {
    const { wrapper } = createWrapperCartStore();
    const wrapperBrowserRouter = ({
      children,
    }: {
      children: React.ReactNode;
    }) => {
      return <BrowserRouter>{wrapper({ children })}</BrowserRouter>;
    };
    const { result } = renderHook(useHeaderCart, {
      wrapper: wrapperBrowserRouter,
    });
  });
});
