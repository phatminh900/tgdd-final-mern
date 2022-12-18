import { render, screen, within } from "@testing-library/react";
import { vi } from "vitest";
import Cookies from "js-cookie";
import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "@testing-library/jest-dom";
import OrderUserHistory,{loader} from "../order-user-history.component.";
import AuthContextProvider from "context/auth.context";
import { userDoLogin } from "utils/test-utils/userAuthentication-test-utils";

describe("OrderUserHistory", () => {
  describe("there's no user", () => {
    const routes = createRoutesFromElements(
      <Route path="/" element={<OrderUserHistory />} loader={() => []} />
    );
    const router = createMemoryRouter(routes);

    const MockOrderUserHistory = () => {
      return (
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      );
    };
    it("should return null if no user found", async () => {
      vi.stubGlobal("localStorage", {
        getItem: (key: string) => JSON.stringify(""),
      });
      // @ts-ignore
      const { container } = render(<MockOrderUserHistory />);
      expect(container).toBeEmptyDOMElement();
    });
    it("should return null if no cookie but have in localStorage", async () => {
      const localStorageUser = {
        email: "phatminh900@gmail.com",
        name: "Phat Tran",
        role: "user",
        _id: "6344d86ab0658db7e15ea459",
      };
      vi.stubGlobal("localStorage", {
        getItem: (key: string) => JSON.stringify(localStorageUser),
      });
      // @ts-ignore
      vi.spyOn(Cookies, "get").mockReturnValueOnce("");
      const { container } = render(<MockOrderUserHistory />);
      expect(container).toBeEmptyDOMElement();
    });
    it("should return null there's an err", async () => {
      // localStorage

      // @ts-ignore
      vi.spyOn(Cookies, "get").mockReturnValueOnce("");
      const { container } = render(<MockOrderUserHistory  />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe("there's nothing in here and user logged in", () => {
    const routes = createRoutesFromElements(
      <Route path="/" element={<OrderUserHistory />} loader={() => []} />
    );
    const router = createMemoryRouter(routes);

    const MockOrderUserHistory = () => {
      return (
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      );
    };
    it("should render there's nothing and have a button to go back home", () => {
      userDoLogin();
      render(<MockOrderUserHistory />);
      const noPurchaseEl = screen.getByTestId("no-purchase");
      const goHomeBtnEl = screen.getByRole("button", { name: /Về trang chủ/i });
      expect(noPurchaseEl).toBeInTheDocument();
      expect(goHomeBtnEl).toBeInTheDocument();
    });
  });
  describe("there's a user logged in and have purchased something ", () => {
    const product1 = {
      title: "iPhone 13 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Vàng Đồng",
    };
    const product2 = {
      title: "iPhone 11 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Đen",
    };
    const userPurchased = [
      {
        createdAt: "2022-11-10T07:50:55.462Z",
        total: 33990000,
        userAddress: "Vn",
        products: [product1, product2],
        _id: "636cad5fecaf30f2e41d78c6",
      },
      {
        createdAt: "2022-12-10T07:50:55.462Z",
        total: 32990000,
        userAddress: "Vn",
        products: [product1, product2],
        _id: "636cad5fecaf30f2e41d78c5",
      },
    ];

    const routes = createRoutesFromElements(
      <Route
        path="/"
        element={<OrderUserHistory />}
        loader={() => userPurchased}
      />
    );
    const router = createMemoryRouter(routes);
    let MockOrderUserHistory = () => {
      return (
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      );
    };
    beforeEach(() => {
      userDoLogin();
    });

    it("should render a list of all products i user have purchased", async () => {
      render(<MockOrderUserHistory />);
      const listEl = screen.getByRole("list");
      expect(await within(listEl).findAllByRole("listitem")).toHaveLength(
        userPurchased.length
      );
    });
  });
});
