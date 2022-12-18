import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderDetailUserInfo from "../order-detail-user-info.component";

describe("OrderDetailUserInfo", () => {
  it("should render user info correct based on data given", () => {
    const user = {
      name: "Phattran",
      email: "tranphat123@gmail.com",
      address: "hello 123 NY",
    };
    render(
      <OrderDetailUserInfo
        user={user}
        address={user.address}
        createdAt={new Date().toDateString()}
      />
    );
    const listEmailNameEl = screen.getByTestId(/order-detail-user-name-email/i);
    const addressEl = screen.getByTestId(/order-detail-user-address/i);
    expect(listEmailNameEl).toHaveTextContent(new RegExp(`${user.name}`));
    expect(listEmailNameEl).toHaveTextContent(new RegExp(`${user.email}`));
    expect(addressEl).toHaveTextContent(new RegExp(`${user.address}`));
  });
  it("should render the time when the products was bought", () => {
    const user = {
      name: "Phattran",
      email: "tranphat123@gmail.com",
      address: "hello 123 NY",
    };
    const date = new Date().toDateString();
    render(
      <OrderDetailUserInfo
        user={user}
        address={user.address}
        createdAt={date}
      />
    );
    const timeEl = screen.getByTestId(/order-detail-time/i);
    expect(timeEl).toHaveTextContent(
      new Date(date).toLocaleString("vi-vn")
    );
  });
});
