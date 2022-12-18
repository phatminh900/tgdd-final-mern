import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AuthComponent from "../auth-component.component";

describe("AuthComponent", () => {
  describe("show different states", () => {
    it("should show err message if there an err", () => {
      const err = "something went wrong";
      const successMsg = "ok";
      const routes = createRoutesFromElements(
        <Route
          path="/"
          element={
            <AuthComponent error={err} successMessage={successMsg}>
              <p>Hello</p>
            </AuthComponent>
          }
        />
      );
      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);
      const errEl = screen.getByTestId(/auth-err/i);
      expect(errEl).toBeDefined();
      expect(errEl.textContent).toBe(err);
    });
    it("should show success message if there an success", () => {
      const successMsg = "OK";
      const err = null;
      const routes = createRoutesFromElements(
        <Route
          path="/"
          element={
            <AuthComponent successMessage={successMsg} error={err}>
              <p>Hello</p>
            </AuthComponent>
          }
        />
      );
      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);
      const successEl = screen.getByTestId(/auth-success/i);
      expect(successEl).toBeDefined();
      expect(successEl.textContent).toBe(successMsg);
    });
  });
});
