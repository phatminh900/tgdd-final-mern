import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import OrderDetailProductInfo from "../order-detail-product-info.component";
import formatCurrency from "utils/formatCurrency";
describe("OrderDetailProductInfo", () => {
  it("should render a product based on data it received (link,price,title,total)", () => {
    const data = {
      category: "phone",
      slug: "iphone-14",
      imgSrc: "src",
      currentColor: "black",
      title: "iphone 14",
      quantity: 2,
      price: 3500000,
    };
    render(<OrderDetailProductInfo {...data} />, { wrapper: BrowserRouter });
    const linkEl = screen.getByRole("link");
    const expectHref = `${window.origin}/${data.category}/${data.slug}`;
    const priceEl = screen.getByTestId(/product-price/i);
    const expectPrice = formatCurrency(data.quantity * data.price);
    const productColorEL = screen.getByTestId("order-detail-product-color");
    const productQuantity = screen.getByTestId("order-detail-product-quantity");
    const titleEl = screen.getByTestId("order-detail-product-title");
    expect((linkEl as HTMLAnchorElement).href).toBe(expectHref);
    expect(priceEl).toHaveTextContent(new RegExp(`${expectPrice}`));
    expect(productColorEL).toHaveTextContent(
      new RegExp(`${data.currentColor}`)
    );
    expect(productQuantity).toHaveTextContent(new RegExp(`${data.quantity}`));
    expect(titleEl).toHaveTextContent(new RegExp(`${data.title}`));
  });
});
