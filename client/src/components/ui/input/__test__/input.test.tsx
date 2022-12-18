import { screen, render } from "@testing-library/react";
import Input, { InputProps } from "../input.component";
describe("Input", () => {
  it("should return password Input type if type===password", () => {
    const inputProps: InputProps = {
      value: "test",
      label: "test",
      id: "test",
      type: "password",
      className: "test",
      onChange: (e: React.ChangeEvent) => {},
      disable: false,
    };
    render(<Input {...inputProps} />);
    const inputEl = screen.getByPlaceholderText(inputProps.label);
    expect((inputEl as HTMLInputElement).type).toBe("password");
  });
  it("should return  Input  type based on type passed(no password)", () => {
    const inputProps: InputProps = {
      value: "test",
      label: "test",
      id: "test",
      type: "text",
      className: "test",
      onChange: (e: React.ChangeEvent) => {},
      disable: false,
    };
    render(<Input {...inputProps} />);
    const inputEl = screen.getByPlaceholderText(inputProps.label);
    expect((inputEl as HTMLInputElement).type).not.toBe("password");
    expect((inputEl as HTMLInputElement).type).toBe(inputProps.type);
  });
  
});
