import { screen, render } from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "@testing-library/jest-dom";
import { Route } from "react-router-dom";
import {
  userDoLogin,
  userNotLogin,
} from "utils//test-utils/userAuthentication-test-utils";
import OrderDetailSpecific from "../order-detail-specific.container";
import AuthContextProvider from "context/auth.context";
import { vi } from "vitest";
describe("OrderDetailSpecific", () => {
  const productPurchased = {
    createdAt: "2022-11-10T07:50:55.462Z",
    products: [
      {
        title: "iPhone 13 Pro Max",
        imgCover:
          "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
        quantity: 1,
        currentColor: "Vàng Đồng",
      },
    ],
    total: 33990000,
    userAddress: "Vn",
    _id: "636cad5fecaf30f2e41d78c6",
  };
  const routes = createRoutesFromElements(
    <Route
      path="/"
      element={<OrderDetailSpecific />}
      loader={() => productPurchased}
    />
  );
  const router = createMemoryRouter(routes);
  const MockOrderDetailSpecific = () => (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
  it("should return null if user doesn't login", () => {
    userNotLogin();
    const { container } = render(<MockOrderDetailSpecific />);
    expect(container).toBeEmptyDOMElement();
  });
});
