import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { IAuthContext, IUser } from "context/auth.context";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import OrderHistoryGreetUserSmall from "../order-history-greet-user-small.component";
describe("OrderHistoryGreetUserSmall", () => {
  it('should render with email and user"s name given', () => {
    const user = {
      name: ":Phattran",
      email: "phatminh900@gmail.com",
      _id: "test",
    };
    const auth: IAuthContext = {
      user,
      setUserHandler: (user: IUser) => {},
      removeUserHandler: () => {},
    };
    render(<OrderHistoryGreetUserSmall auth={auth} user={user} />, {
      wrapper: BrowserRouter,
    });
    //   match user name
    const userNameEl = screen.getByTestId("user-name");
    const userEmailEl = screen.getByTestId("user-email");
    expect(userNameEl).toHaveTextContent(user.name);
    expect(userEmailEl).toHaveTextContent(user.email);
  });
  it("should quit the current account", async () => {
    const user = userEvent.setup();
    const userValue = {
      name: ":Phattran",
      email: "phatminh900@gmail.com",
      _id: "test",
    };
    const auth: IAuthContext = {
      user: userValue,
      setUserHandler: vi.fn((user: IUser) => {}),
      removeUserHandler: vi.fn(() => {}),
    };

    render(<OrderHistoryGreetUserSmall auth={auth} user={userValue} />, {
      wrapper: BrowserRouter,
    });
    const btnEl = screen.getByRole("button", { name: "Đăng xuất" });
    //   match user name
    await user.click(btnEl);
    expect(auth.removeUserHandler).toBeCalled();
  });
});
