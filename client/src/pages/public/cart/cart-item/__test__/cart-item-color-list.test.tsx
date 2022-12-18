import { screen, render } from "@testing-library/react";
import CartItemColorList from "../cart-item-color-list.component";
describe("CartItemColorList", () => {
  it("should render img and color associate with the img", () => {
    const testData = {
      isOpenColorList: false,
      imgColorsCover: ["/img/phone-14-black","/img/phone-14-sliver"],
      changeCurrentColor: function (color: string) {
        this.currentColor = color;
      },
      currentColor: "Black",
      colors: ["Black", "Sliver"],
    };
    render(<CartItemColorList {...testData} />);
  });
});
