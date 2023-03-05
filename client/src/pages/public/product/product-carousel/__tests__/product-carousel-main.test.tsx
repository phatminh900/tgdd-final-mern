import React from "react";
import ReactDOMServer from "react-dom/server";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ProductCarouselMain from "../product-carousel-main.component";

describe("ProductCarouselMain", () => {
  it("should have class active when the url matches the hash in browser", () => {
    const testLinkData = [
      {
        id: "871b3925-60fc-4dd3-8773-2318fa28a651",
        title: "Điểm nổi bậc",
        hash: "highlight",
      },
      {
        id: "b8acae32-5425-4008-a90d-03e76cc2249b",
        title: "Vang Đồng",
        hash: "Vang Đồng",
      },
    ];
    const testTabEl = [<p>Hello</p>, <a>Link </a>];
    window.location.hash = testLinkData[0].hash;
    const { container } = render(
      <ProductCarouselMain tabElements={testTabEl} links={testLinkData} />,
      {
        wrapper: BrowserRouter,
      }
    );
    // create hash
    const tabElExpected = testTabEl[0];
    expect(container).toContainHTML(
      ReactDOMServer.renderToStaticMarkup(tabElExpected)
    );
  });
});
