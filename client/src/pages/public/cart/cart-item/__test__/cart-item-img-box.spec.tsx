import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CartItemImgBox from "../cart-item-img-box.component";
import { vi } from "vitest";
describe("CartItemImgBox", () => {
  it("should render an img and  a button", () => {
    const testData = {
      link: "/phone/iphone14",
      currentColorImgCover: "/phone14/Black",
      removeItem: () => {},
    };
    render(<CartItemImgBox {...testData} />, { wrapper: BrowserRouter });
    const btnEl = screen.getByRole("button");
    const imgEl = screen.getByRole("img");
    expect((imgEl as HTMLImageElement).src).toBe(
      window.origin + testData.currentColorImgCover
    );
    expect(btnEl).toBeInTheDocument();
  });
  it("should remove current cart Item when removeBtn was clicked", async () => {
    const testData = {
      link: "/phone/iphone14",
      currentColorImgCover: "/phone14/Black",
      removeItem: vi.fn(() => {}),
    };
    const user = userEvent.setup();
    render(<CartItemImgBox {...testData} />, { wrapper: BrowserRouter });
    const btnEl = screen.getByRole("button");
    await user.click(btnEl);
    expect(testData.removeItem).toBeCalled();
  });
});
