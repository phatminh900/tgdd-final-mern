import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { IUserBooking } from "../../../order-history.interface";
import UserHistoryListPurchased from "../order-history-user-list-purchased";

describe("UserHistoryListPurchased", () => {
  it("should render name of the first product and the quantity remains in the list", () => {
    const product1 = {
      title: "iPhone 13 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Vàng Đồng",
      slug: "iPhone-13-Pro-Max",
    };
    const product2 = {
      title: "iPhone 11 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Đen",
      slug: "iPhone-11-Pro-Max",
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
    render(
      <UserHistoryListPurchased bookings={userPurchased as IUserBooking[]} />,
      { wrapper: BrowserRouter }
    );
    const titleEl = screen.getAllByRole("link")[0];
    expect(titleEl.textContent).toContain(
      `${userPurchased[0].products[0].title}`
    );
    expect(titleEl.textContent).toContain(
      `${userPurchased.length - 1} sản phẩm khác`
    );
  });
  it("should render same img src and date format in data it received", () => {
    const product1 = {
      title: "iPhone 13 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Vàng Đồng",
      slug: "iPhone-13-Pro-Max",
    };
    const product2 = {
      title: "iPhone 11 Pro Max",
      imgCover:
        "/img/phones/phone-62f5b992c0d5d377f467d215-1661482847498-cover.jpg",
      quantity: 1,
      currentColor: "Đen",
      slug: "iPhone-11-Pro-Max",
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
    render(
      <UserHistoryListPurchased bookings={userPurchased as IUserBooking[]} />,
      { wrapper: BrowserRouter }
    );
    const liEls = screen.getAllByRole("listitem");
    liEls.forEach((el, i) => {
      const imgEl = within(el).getByRole("img");
      const dateEl = within(el).getByTestId("purchased-date");
      expect((imgEl as HTMLImageElement).src).toContain(
        userPurchased[i].products[i].imgCover
      );
      expect(dateEl).toHaveTextContent(
        new Date(userPurchased[i].createdAt).toLocaleDateString("vi-vn")
      );
    });
  });
});
