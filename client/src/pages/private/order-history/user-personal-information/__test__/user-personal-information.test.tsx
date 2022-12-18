import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import AuthContextProvider from "context/auth.context";
import {
  BrowserRouter,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { userDoLogin } from "utils/test-utils/userAuthentication-test-utils";
import { vi } from "vitest";

import UserPersonalInformation, {
  action,
} from "../user-personal-information.component";

describe("UserPersonalInformation", () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<UserPersonalInformation />} action={action} />
    )
  );
  const MockUserPersonalInformation = () => (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
  beforeEach(() => {
    userDoLogin();
  });
  it("should prefill username and email", () => {
    const { name, email } = userDoLogin();
    render(<MockUserPersonalInformation />);
    const nameInputEl = screen.getByPlaceholderText(/name/i);
    const emailInputEl = screen.getByPlaceholderText(/email/i);
    expect((nameInputEl as HTMLInputElement).value).toBe(name);
    expect((emailInputEl as HTMLInputElement).value).toBe(email);
  });
  it("should disable email input", () => {
    render(<MockUserPersonalInformation />);

    const emailInputEl = screen.getByPlaceholderText(/email/i);
    expect((emailInputEl as HTMLInputElement).disabled).toBe(true);
  });
  it("should update username", async () => {
    const user = userEvent.setup();
    render(<MockUserPersonalInformation />);
    const responseValue = {
      status: "success",
      data: {
        _id: "6344d86ab0658db7e15ea459",
        name: "Tran Phat 123",
        email: "phatminh900@gmail.com",
        role: "user",
      },
    };
    vi.spyOn(axios, "patch").mockResolvedValueOnce(responseValue);
    const inputNameEl = screen.getByPlaceholderText(/name/i);
    const btnEl = screen.getByRole("button", { name: /Cập nhật/i });

    await user.type(inputNameEl, "Tran Phat 123");
    await user.click(btnEl);
    expect(axios.patch).toBeCalled();
  });
});
