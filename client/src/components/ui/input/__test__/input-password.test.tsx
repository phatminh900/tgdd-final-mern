import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputPassword from "../input-password.component";
import { InputProps } from "./../input.component";
describe("InputPassword", () => {
  it('should return input with type==="password"', () => {
    const inputProps = {
      value: "test",
      label: "test",
      id: "test",
      className: "test",
      //   onChange: (e: React.ChangeEvent) => {},
      disable: false,
    };
    render(<InputPassword {...inputProps} placeholder="test" />);
    const inputEl = screen.getByPlaceholderText("test");
    expect((inputEl as HTMLInputElement).type).toBe("password");
  });
  it("should change type from password to text when click eye open btn", async () => {
    const user = userEvent.setup();
    const inputProps = {
      value: "test",
      label: "test",
      id: "test",
      className: "test",
      onChange: (e: React.ChangeEvent) => {},
      disable: false,
    };
    render(<InputPassword {...inputProps} placeholder="text" />);
    const inputEl = screen.getByPlaceholderText("text");
    const btnEl = screen.getByRole("button");
    await waitFor(async () => await user.click(btnEl));
    // after click change to text
    expect((inputEl as HTMLInputElement).type).toBe("text");
  });
  it("should change type from text to password when click eye close btn", async () => {
    const user = userEvent.setup();
    const inputProps = {
      value: "test",
      label: "test",
      id: "test",
      className: "test",
      onChange: (e: React.ChangeEvent) => {},
      disable: false,
    };
    render(<InputPassword {...inputProps} placeholder="text" />);
    const inputEl = screen.getByPlaceholderText("text");
    const btnEl = screen.getByRole("button");
    await waitFor(async () => await user.click(btnEl));
    await waitFor(async () => await user.click(btnEl));
    // after click change to text
    expect((inputEl as HTMLInputElement).type).toBe("password");
  });
});
