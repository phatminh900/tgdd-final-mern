import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BtnSubmit from "../btn-submit.component";
describe("BtnSubmit", () => {
  it("should only show text if there no loading and success or err", () => {
    const testProps = { text: "hello", isLoading: false, isSuccess: false };
    render(<BtnSubmit {...testProps} />);
    const btnEl = screen.getByRole("button");
    expect(btnEl.textContent).toBe(testProps.text);
    expect(btnEl.childNodes).toHaveLength(1);
  });
  it("should success icon if it succeed", () => {
    const testProps = { text: "loading...", isLoading: false, isSuccess: true };
    render(<BtnSubmit {...testProps} />);
    const btnEl = screen.getByRole("button");
    expect(btnEl.firstElementChild).toBeInstanceOf(SVGElement);
    expect(btnEl.childNodes).toHaveLength(1);
  });
});
