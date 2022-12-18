import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cookies from "js-cookie";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import OrderHistory from "../order-history.container";
import AuthContextProvider from "context/auth.context";
import { userDoLogin, userNotLogin } from "utils/test-utils/userAuthentication-test-utils";
const MockOrderHistory = () => (
  <AuthContextProvider>
    <BrowserRouter>
      <OrderHistory />
    </BrowserRouter>
  </AuthContextProvider>
);
describe("OrderHistory", () => {
  it("should return null and automatically redirect user to login page when no user found", () => {
    userNotLogin()

    const { container } = render(<OrderHistory />, { wrapper: BrowserRouter });
    expect(container).toBeEmptyDOMElement();
  });
  it("should return OrderHistory component", () => {
    userDoLogin();
    render(<MockOrderHistory />);
    const orderHistoryContainerEl = screen.getByTestId(
      /order-history-container/i
    );
    expect(orderHistoryContainerEl).toBeDefined();
  });
});
