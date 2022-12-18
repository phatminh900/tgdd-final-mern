import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthContextProvider from "context/auth.context";
import { renderWithProviders } from "utils/test-utils/test-utils-redux-toolkit";
import { userDoLogin } from "utils/test-utils/userAuthentication-test-utils";
import CartUserInfo from "../cart-user-info.component";
import {
  getCartStateTest,
  createWrapperCartStore,
} from "utils/test-utils/cartStore.test-utils";
describe("CartUserInfo", () => {
  it("should return null if user donot login", () => {
    const { container } = renderWithProviders(
      <AuthContextProvider>
        <CartUserInfo />
      </AuthContextProvider>
    );
    expect(container).toBeEmptyDOMElement();
  });
  it("should render 3 input field", () => {
    const { name, email } = userDoLogin();
    renderWithProviders(
      <AuthContextProvider>
        <CartUserInfo />
      </AuthContextProvider>
    );
    // name dynamic
    const inputNameEl = screen.getByPlaceholderText(/name/i);
    // email not allow change
    const inputEmailEl = screen.getByPlaceholderText(/email/i);

    const inputAddressEl = screen.getByPlaceholderText(/address/i);
    expect(inputNameEl).toBeInTheDocument();
    expect(inputEmailEl).toBeInTheDocument();
    expect(inputAddressEl).toBeInTheDocument();
  });
  it("should prefill if user do login and provide value", () => {
    const { wrapper } = createWrapperCartStore();
    const { name, email } = userDoLogin();
    // name dynamic

    render(
      <AuthContextProvider>
        <CartUserInfo />
      </AuthContextProvider>,
      { wrapper }
    );

    const inputNameEl = screen.getByPlaceholderText(
      /name/i
    ) as HTMLInputElement;
    // email not allow change
    const inputEmailEl = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;

    const inputAddressEl = screen.getByPlaceholderText(
      /address/i
    ) as HTMLInputElement;
    const userAddress = getCartStateTest().userAddress;
    expect(inputNameEl.value).toBe(name);
    expect(inputEmailEl.value).toBe(email);
    expect(inputAddressEl.value).toBe(userAddress);
  });
});
