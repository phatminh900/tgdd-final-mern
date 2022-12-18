import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CartItemPromotion from "../cart-item-promotion.component";
import { vi } from "vitest";
describe("CartItemPromotion", () => {
  it("should render a list of promotion", () => {
    const testData = {
      isOpenPromotionList: false,
      promotion: ["test1", "test2"],
      togglePromotionList: vi.fn(() => {}),
    };
    render(<CartItemPromotion {...testData} />, { wrapper: BrowserRouter });
    const listEl = screen.getByRole("list");
    expect(within(listEl).getAllByRole("listitem")).toHaveLength(
      testData.promotion.length
    );
  });
  it("should not render a btn manage promotion list when there's no promotion", () => {
    const testData = {
      isOpenPromotionList: false,
      promotion: [],
      togglePromotionList: vi.fn(() => {}),
    };
    render(<CartItemPromotion {...testData} />, { wrapper: BrowserRouter });
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("");
  });
  it("should reveal list of promotion when click btn", async () => {
    const user = userEvent.setup();
    let isOpenPromotionList = false;
    const togglePromotionList = function () {
      isOpenPromotionList = !isOpenPromotionList;
    };
    const promotion = ["test1"];

    const { rerender } = render(
      <CartItemPromotion
        isOpenPromotionList={isOpenPromotionList}
        togglePromotionList={togglePromotionList}
        promotion={promotion}
      />,
      { wrapper: BrowserRouter }
    );
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent(new RegExp(`Xem ${promotion.length}`))
    await user.click(btnEl);
    rerender(
      <CartItemPromotion
        isOpenPromotionList={isOpenPromotionList}
        togglePromotionList={togglePromotionList}
        promotion={promotion}
      />
    );
    expect(btnEl.className).toContain("active");
    expect(btnEl).toHaveTextContent(/Thu gọn/i)
  });
});
