import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import SignUp, { action } from "../signup.container";

const renderComponent = () => {
  const user = userEvent.setup();
  const routes = [{ path: "/signup", element: <SignUp />, action }];

  const router = createMemoryRouter(routes, { initialEntries: ["/signup"] });

  render(<RouterProvider router={router} />);

  //
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/^password$/i);
  const passwordConfirmInput = screen.getByLabelText(/^passwordConfirm$/i);
  return { user, nameInput, emailInput, passwordConfirmInput, passwordInput };
};

describe("ui", () => {
  test("have 4 input fields name,password,email,password confirm", () => {
    const { user, ...inputs } = renderComponent();
    Object.values(inputs).forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });
});
