import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CartItemColorItem from "../cart-item-color-item.component";

describe("CartItemColorItem", () => {
  it("should render a list item contain a img and color of it", async () => {
    const imgProduct = "/iphone-14-";
    const currentProductColor = "sliver";
    const testData = {
      color: "black",
      currentProductColor,
      imgSrc: `${imgProduct}-${currentProductColor}`,
    };
    const changeCurrentColor = function (color: string) {
      testData.currentProductColor = color;
      testData.imgSrc = `/iphone-14-${color}`;
    };
    render(
      <CartItemColorItem
        {...testData}
        changeCurrentColor={changeCurrentColor}
      />
    );
    const imgEl = screen.getByRole("img");
    const colorEl = screen.getByTestId(/cart-item-color/i);
    expect((imgEl as HTMLImageElement).src).toBe(
      window.origin + testData.imgSrc
    );
    expect(colorEl).toHaveTextContent(testData.color);
  });
  it("should change the currentProduct color ,imgSrc and add styles to color changed", async () => {
    const user = userEvent.setup();
    const imgProduct = "/iphone-14-";
    const currentProductColor = "sliver";
    const testData = {
      color: "black",
      currentProductColor,
      imgSrc: `${imgProduct}${currentProductColor}`,
    };
    const changeCurrentColor = function (color: string) {
      testData.currentProductColor = color;
      testData.imgSrc = `/iphone-14-${color}`;
    };
    const { rerender } = render(
      <CartItemColorItem
        {...testData}
        changeCurrentColor={changeCurrentColor}
      />
    );
    const listEl = screen.getByRole("listitem");

    await user.click(listEl);

    rerender(
      <CartItemColorItem
        {...testData}
        changeCurrentColor={changeCurrentColor}
      />
    );
    const listItemEl = screen.getByRole("listitem");
    const imgEl = screen.getByRole("img");
    const oldExpectImgSrc = `${imgProduct}${currentProductColor}`;
    expect((imgEl as HTMLImageElement).src).not.toBe(
      window.origin + oldExpectImgSrc
    );
    expect(listItemEl.className).toContain("active");

    expect(listEl.className).toContain("active");
  });
});
