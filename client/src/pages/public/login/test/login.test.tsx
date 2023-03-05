import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Login, { action } from "../login.container";
import createMockServer from "mocks/createMockServer";
import { API_LOGIN, URL_API } from "app-constants/apiUrl.constant";
import { ROUTES } from "app-constants/navigation.constant";
const renderComponent = () => {
  const user = userEvent.setup();
  const routes = [{ path: "/login", element: <Login />, action }];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/login"],
  });
  render(<RouterProvider router={router} />);
  const btnSubmit = screen.getByText(/login/i);
  const inputPassword = screen.getByTestId(/input-password/i);
  const inputEmail = screen.getByRole("textbox", { name: /email/i });
  return { user, btnSubmit, inputEmail, inputPassword };
};
describe("ui", () => {
  describe("input validation", () => {
    describe("email", () => {
      test("input has border yellow when not have format of an email", async () => {
        const { user, btnSubmit, inputEmail } = renderComponent();

        await user.click(inputEmail);
        // doesn't have @ symbol
        await user.keyboard("phatminh123gmail.com");
        //
        expect(inputEmail).toHaveStyle({
          "box-shadow": "0 0 4px var(--color-secondary)",
        });
      });
      test("input has border blue when  have format of an email", async () => {
        const { user, btnSubmit, inputEmail, inputPassword } =
          renderComponent();
        await user.click(inputEmail);
        //  having @ symbol
        await user.keyboard("phatminh@123gmail.com");

        //
        expect(inputEmail).toHaveStyle({
          "box-shadow": "0 0 4px var(--color-tertiary)",
        });
      });
    });
  });
  test("click eye icon show password", async () => {
    const { user, inputPassword } = renderComponent();

    const showPasswordBtn = screen.getByRole("button", {
      name: /show-password/i,
    });
    await user.click(showPasswordBtn);
    expect((inputPassword as HTMLInputElement).type).toBe("text");
  });
});
describe("fail case", () => {
  createMockServer([
    {
      path: `${URL_API}${API_LOGIN}`,
      method: "post",
      res(req, res, ctx) {
        return [
          ctx.status(404),
          ctx.json({
            message: "User or password incorrect!",
            status: "fail",
          }),
        ];
      },
    },
  ]);
  test("show err msg(user or password incorrect)", async () => {
    const { user, btnSubmit, inputEmail, inputPassword } = renderComponent();

    await user.click(inputEmail);
    await user.keyboard("phatminh123@gmail.com");
    await user.click(inputPassword);
    await user.keyboard("password123");
    await user.click(btnSubmit);

    //
    const errMsg = await screen.findByText(/User or password incorrect!/i);
    expect(errMsg).toBeInTheDocument();
  });
});
describe('navigate to signup page', () => { 
  test('should change url to signup',async()=>{
    const {user}=renderComponent()
    const linkChangePage=screen.getByRole('link',{name:/signup here/i})
    expect(linkChangePage).toHaveAttribute('href',ROUTES.SIGNUP)
  })
 })