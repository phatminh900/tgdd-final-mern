import { render, screen, within } from "@testing-library/react";
import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Product from "../product.container";
import AuthContextProvider from "context/auth.context";
import { setupStore } from "store/main.store";
import { renderWithProviders } from "utils/test-utils/test-utils-redux-toolkit";
import { r, t } from "vitest/dist/index-b68b3c09";

describe("Product", () => {
  describe("open modal", () => {
    const testProductData = {
      configuration: {
        monitor: {
          technology: "OLED",
          resolution: "2796 x 1290 Pixels",
          broadScreen: "6.7",
          sweepFrequency: 120,
          maximumLight: 2000,
        },
        operatingSystem: {
          type: "IOS",
          number: 16,
        },
        rearCam: {
          quantity: 3,
          quality: 48,
          film: ["4K 2160@24fps", "4K 2160@30fps"],
          isHasFlash: true,
          features: ["nightmode", "touch", "Wise", "zoom", "HDR"],
        },
        frontCam: {
          quality: 1,
          features: ["nightmode", "touch", "Wise", "zoom", "HDR"],
        },
        chip: {
          type: "Apple",
          number: "A16",
          technology: "Bionic",
        },
        ram: 6,
        residualMemory: 123,
        internalMemory: 128,
        battery: {
          volume: 4323,
          type: "Li-Ion",
          W: 20,
        },
        size: {
          length: 160.7,
          width: 77.6,
        },
        volume: {
          depth: 7.65,
          weight: 207,
        },
        launchTime: "09/2022",
        design: "Nguyên khối",
        sim: {
          type: "Nano",
          quantity: 2,
        },
      },
      _id: "63733fed6e0bec1759cf386a",
      title: "Điện thoại iPhone 14 Pro Max",
      type: "phone",
      category: "phones",
      operatingSystem: "IOS",
      original: true,
      firm: "Apple",
      imgCover:
        "/img/products/product-63733fed6e0bec1759cf386a-1668500886297-cover.jpg",
      imgColorsCover: [
        "/img/products//product-63733fed6e0bec1759cf386a-1668500886297-img-color-cover-2.jpg",
        "/img/products//product-63733fed6e0bec1759cf386a-1668500886297-img-color-cover-3.jpg",
        "/img/products//product-63733fed6e0bec1759cf386a-1668500886297-img-color-cover-4.jpg",
      ],
      colors: ["Đen", "Tím", "Vàng"],
      storage: ["128", "256", "512"],
      price: 35900000,
      generalInformation: [
        "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series với đầy đủ phiên bản tại Thế Giới Di Động.",
      ],
      ratingAverage: 0,
      inStock: true,
      ratingQuantity: 0,
      promotion: [],
      discount: [],
      otherVersions: [
        "iPhone-14-Pro-Max-128GB",
        "iPhone-14-Pro-Max-256GB",
        "iPhone-14-Pro-Max-512GB",
      ],
      slug: "iPhone-14-Pro-Max-128GB",
      __v: 0,
      imgs: {
        imgHighlights: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-16.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-17.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-18.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-19.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-20.jpg",
        ],
        imgConfiguration: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-21.jpg",
        ],
        imgGeneralInformation: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886300-22.jpg",
        ],
        Đen: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-5.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-6.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-7.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-8.jpg",
        ],
        Tím: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-9.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-10.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886298-11.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-12.jpg",
        ],
        Vàng: [
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-14.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-13.jpg",
          "/img/products/product-63733fed6e0bec1759cf386a-1668500886299-15.jpg",
        ],
      },
    };
    const routes = createRoutesFromElements(
      <Route path="/" element={<Product />} loader={() => testProductData} />
    );
    const router = createMemoryRouter(routes);
    const store = setupStore();

    const MockOrderUserHistory = () => {
      return (
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      );
    };
    it("should open checkoutmodal when buy now btn was clicked", async () => {
      // @ts-ignore
      const user = userEvent.setup();
      const { baseElement } = renderWithProviders(<MockOrderUserHistory />);
      const buyNowBtnEl = screen.getByRole("button", { name: /Mua Ngay/i });
      await userEvent.click(buyNowBtnEl);
      expect(
        within(baseElement).getByTestId(/modal/)
      ).not.toBeEmptyDOMElement();
    });
  });
});

