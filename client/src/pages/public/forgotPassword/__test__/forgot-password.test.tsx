import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createRoutesFromElements,
  createMemoryRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ForgotPassword from "../forgot-password.container";
describe("ForgotPassword", () => {
  describe("user interact", () => {
    it("should change email input as user typing", async () => {
      const routes = createRoutesFromElements(
        <Route path="/" element={<ForgotPassword />} />
      );
      const router = createMemoryRouter(routes);
      const MockOrderDetailSpecific = () => <RouterProvider router={router} />;

      const user = userEvent.setup();
      render(<MockOrderDetailSpecific />);
      const inputEmailEl = screen.getByPlaceholderText(
        /Email/i
      ) as HTMLInputElement;
      const testEmail = "email.com";
      await user.type(inputEmailEl, testEmail);
      expect(inputEmailEl.value).toBe(testEmail);
    });
  });
});
