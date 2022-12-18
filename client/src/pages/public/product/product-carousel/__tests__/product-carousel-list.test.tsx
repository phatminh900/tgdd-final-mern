import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ProductCarouselList from "../product-carousel-list.component";

describe("ProductCarouselList", () => {
  it("should have class active when the url matches the hash in browser", () => {
    const testData = [
      {
        id: "871b3925-60fc-4dd3-8773-2318fa28a651",
        title: "Điểm nổi bậc",
        hash: "hightlight",
      },
      {
        id: "b8acae32-5425-4008-a90d-03e76cc2249b",
        title: "Vang Đồng",
        hash: "Vang Đồng",
      },
    ];
    window.location.hash = testData[0].hash;
    render(<ProductCarouselList links={testData} />, {
      wrapper: BrowserRouter,
    });
    // create hash
    const firstLinkEl = screen.getByTestId(`#${encodeURI(testData[0].hash)}`);
    expect(firstLinkEl.className).toContain("active");
  });
});
