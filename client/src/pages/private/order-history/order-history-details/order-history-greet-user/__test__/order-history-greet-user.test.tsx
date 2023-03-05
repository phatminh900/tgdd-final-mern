// import { screen, render, within } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import { IAuthContext, IUser } from "context/auth.context";
// import { BrowserRouter } from "react-router-dom";
// import { vi } from "vitest";
// import OrderHistoryGreetUser from "../order-history-greet-user.component";

// describe("OrderHistoryGreetUser", () => {
//   it('should render with email and user"s name given', () => {
//     const user = {
//       name: ":Phattran",
//       email: "phatminh900@gmail.com",
//       _id: "test",
//     };
//     const auth: IAuthContext = {
//       user,
//       setUserHandler: (user: IUser) => {},
//       removeUserHandler: () => {},
//     };
//     render(<OrderHistoryGreetUser  user={user} />, {
//       wrapper: BrowserRouter,
//     });
//     const headingEl = screen.getByRole("heading");
//     //   match user name
//     expect(within(headingEl).getByText(user.name)).toHaveTextContent(user.name);
//     expect(within(headingEl).getByText(user.email)).toHaveTextContent(
//       user.email
//     );
//   });
//   it("should quit the current account", async () => {
//     const user = userEvent.setup();
//     const userValue = {
//       name: ":Phattran",
//       email: "phatminh900@gmail.com",
//       _id: "test",
//     };
//     const auth: IAuthContext = {
//       user: userValue,
//       setUserHandler: vi.fn((user: IUser) => {}),
//       removeUserHandler: vi.fn(() => {}),
//     };

//     render(<OrderHistoryGreetUser  user={userValue} />, {
//       wrapper: BrowserRouter,
//     });
//     const btnEl = screen.getByRole("button");
//     //   match user name
//     await user.click(btnEl);
//     expect(auth.removeUserHandler).toBeCalled();
//   });
// });
