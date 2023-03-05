// @vitest-environment jsdom
import {
  findByRole,
  findByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import { vi } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "utils/test-utils/test-utils-redux-toolkit";
import data from "./data.json";
import { IPhoneDocument } from "interfaces/allProductsType.interface";
import createMockServer from "mocks/createMockServer";
import { URL_API } from "app-constants/apiUrl.constant";

// const cryptoMock = { randomUUID: vi.fn(() => Math.random()) };
// vi.stubGlobal("crypto", cryptoMock);
const testData = JSON.parse(data);
const product = testData as IPhoneDocument;

vi.stubGlobal("innerWidth", 1200);

import Product, { loader } from "../product.container";
import formatCurrency from "utils/formatCurrency";

// mock width default

const renderComponent = () => {
  const user = userEvent.setup();
  const routes = [
    {
      path: `/${product.category}/:slug`,
      element: <Product />,
      loader,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: [
      `/${product.category}/${product.slug}`,
      `/${product.category}/${product.slug}#configurations`,
    ],
    initialIndex: 0,
  });
  const { container } = renderWithProviders(<RouterProvider router={router} />);
  return { user, container, router };
};

describe("product", () => {
  createMockServer([
    {
      path: `${URL_API}${product.category}/${product.slug}`,
      method: "get",
      res(req, res, ctx) {
        return [ctx.json({ status: "success", data: testData })];
      },
    },
  ]);
  describe("header", () => {
    describe("navigate links", () => {
      test("have link referring to its category", async () => {
        renderComponent();
        const links = within(await screen.findByRole("banner")).getAllByRole(
          "link"
        );
        // category ---- firm
        const [categoryLink, firmLink] = links;
        expect(categoryLink).toHaveAttribute(
          "href",
          `/${product.category.toLowerCase()}`
        );
        expect(firmLink).toHaveAttribute(
          "href",
          `/${product.category.toLowerCase()}?firm=${product.firm}`
        );
      });
    });
    describe("title", () => {
      test("match title", async () => {
        renderComponent();
        console.log(window.innerWidth);
        const title = within(await screen.findByRole("banner")).getByRole(
          "heading"
        );
        expect(title).toHaveTextContent(new RegExp(product.title, "i"));
      });
    });
    describe("rating quantity", () => {
      test("match title", async () => {
        renderComponent();
        const ratingQuantity = within(
          await screen.findByRole("banner")
        ).getByText(new RegExp(`${product.ratingQuantity} đánh giá`, "i"));
        expect(ratingQuantity).toBeInTheDocument();
      });
    });
  });
  describe("slide", () => {
    test("have the same img slide length", async () => {
      renderComponent();
      const slides = await screen.findByTestId("slides");
      const imgSlides = within(slides).getAllByRole("img");

      expect(imgSlides).toHaveLength(product.imgs.imgHighlights.length);
      imgSlides.forEach((imgSlide, i) => {
        expect((imgSlide as HTMLImageElement).src).toContain(
          product.imgs.imgHighlights[i]
        );
      });
    });
    test("first img is rendered", async () => {
      renderComponent();
      const slideBoxes = await screen.findAllByTestId("slide-box");
      const firstSlide = slideBoxes[0];
      expect(firstSlide.style.translate).toBe(`0%`);
    });
    test("go to the next slide when clicking right btn", async () => {
      const { user } = renderComponent();
      const btnRight = await screen.findByRole("button", {
        name: /navigate-image-right/i,
      });
      await user.click(btnRight);
      const slideBoxes = await screen.findAllByTestId("slide-box");
      const firstSlide = slideBoxes[0];
      const secondSlide = slideBoxes[1];
      // first slide get hidden
      expect(firstSlide.style.translate).toBe("-100%");
      // second slide get rendered
      expect(secondSlide.style.translate).toBe("0%");
    });
    test("go to the prev slide when clicking left btn", async () => {
      const { user } = renderComponent();
      const btnLeft = await screen.findByRole("button", {
        name: /navigate-image-left/i,
      });
      const btnRight = await screen.findByRole("button", {
        name: /navigate-image-right/i,
      });
      await user.click(btnRight);

      await user.click(btnLeft);
      const slideBoxes = await screen.findAllByTestId("slide-box");
      const firstSlide = slideBoxes[0];
      const secondSlide = slideBoxes[1];
      // first slide get hidden
      expect(firstSlide.style.translate).toBe("0%");
      // second slide get rendered
      expect(secondSlide.style.translate).toBe("100%");
    });

    test("when at the beginning of the slide clicking left btn go to the last slide", async () => {
      const { user } = renderComponent();
      const btnLeft = await screen.findByRole("button", {
        name: /navigate-image-left/i,
      });
      const slides = screen.getAllByTestId("slide-box");
      const firstSlide = slides.at(0);
      const lastSlide = slides.at(-1);
      await user.click(btnLeft);
      expect(lastSlide?.style.translate).toBe("0%");
      expect(firstSlide?.style.translate).toBe(
        `-${(product.imgs.imgHighlights.length - 1) * 100}%`
      );
    });
    test("when at the end of the slide clicking left btn go to the very first slide", async () => {
      const { user } = renderComponent();
      const btnLeft = await screen.findByRole("button", {
        name: /navigate-image-left/i,
      });
      const slides = screen.getAllByTestId("slide-box");

      for (let i = 0; i < slides.length - 1; i++) {
        await user.click(slides[i]);
      }
      const firstSlide = slides.at(0);
      const lastSlide = slides.at(-1);

      expect(lastSlide?.style.translate).toBe(
        `${(product.imgs.imgHighlights.length - 1) * 100}%`
      );
      expect(firstSlide?.style.translate).toBe(`0%`);
    });
    describe("modal", () => {
      test("click a slide open modal with corresponding img", async () => {
        const { user } = renderComponent();
        const slides = await screen.findAllByTestId("slide");
        const firstSlide = slides[0];
        await user.click(firstSlide);
        const modal = await screen.findByTestId("modal");
        const modalSlides = await within(modal).findAllByTestId("slide");
        const modalSecondSlide = modalSlides[1];
        const slideImg = within(modalSecondSlide).getByRole("img");
        expect(slideImg).toHaveAttribute("src", product.imgs.imgHighlights[1]);
      });
      test("click a slide open modal and highlight tag is enable", async () => {
        const { user } = renderComponent();
        const slides = await screen.findAllByTestId("slide");
        const firstSlide = slides[0];
        await user.click(firstSlide);
        const modal = await screen.findByTestId("modal");
        const listEl = await within(modal).findByRole("listitem", {
          name: /#highlight/i,
        });
        expect(listEl.className).toContain("active");
      });
      test("click configuration tag configuration tag is enable", async () => {
        const { user } = renderComponent();
        const slides = await screen.findAllByTestId("slide");
        const firstSlide = slides[0];
        await user.click(firstSlide);
        const configurationTagBeforeClick = screen.getByRole("listitem", {
          name: /configurations/i,
        });
        const btn = within(configurationTagBeforeClick).getByRole("button");
        await user.click(btn);
        const configurationTagAfterClick = await screen.findByRole("listitem", {
          name: /configurations/i,
        });
        expect(configurationTagAfterClick.className).toContain("active");
      });
      test("click color tag color tag is enable", async () => {
        const { user, router } = renderComponent();
        const slides = await screen.findAllByTestId("slide");
        const firstSlide = slides[0];
        await user.click(firstSlide);
        const colorTagBeforeClick = screen.getByRole("listitem", {
          name: new RegExp(encodeURI(product.colors[1]), "i"),
        });
        const btn = within(colorTagBeforeClick).getByRole("button");
        await user.click(btn);
        const configurationTagAfterClick = await screen.findByRole("listitem", {
          name: new RegExp(encodeURI(product.colors[1]), "i"),
        });
        console.log(router.state.location.hash);
        expect(router.state.location.hash).toBe(
          `#${encodeURI(product.colors[1])}`
        );
        expect(configurationTagAfterClick.className).toContain("active");
      });
    });
  });
  describe("storage", () => {
    test("render all possible product's storage", async () => {
      renderComponent();
      const storage = await screen.findByTestId("product-storage");
      const buttons = within(storage).getAllByRole("button");

      expect(buttons).toHaveLength(product.storage.length);
      buttons.forEach((button, i) => {
        expect(button).toHaveTextContent(
          new RegExp(`${product.storage[i]}Gb`, "i")
        );
      });
    });
  });
  describe("colors", () => {
    test("render all possible product's colors", async () => {
      renderComponent();
      const colors = await screen.findByTestId("product-colors");
      const buttons = within(colors).getAllByRole("button");

      expect(buttons).toHaveLength(product.colors.length);
      buttons.forEach((button, i) => {
        expect(button).toHaveAttribute("data-color", product.colors[i]);
        expect(button).toHaveTextContent(
          new RegExp(`${product.colors[i]}`, "i")
        );
      });
    });
  });
  describe("price", () => {
    test("render appropriate price", async () => {
      renderComponent();
      const price = await screen.findByText(
        new RegExp(`${formatCurrency(product.price)}`)
      );
      expect(price).toBeInTheDocument();
    });
  });
  describe("carouselList", () => {
    test("click highligh open modal with #highlight", async () => {
      const { user, router } = renderComponent();
      const btnHighLight = await screen.findByRole("button", {
        name: new RegExp("highlight", "i"),
      });
      await user.click(btnHighLight);
      const modal = await screen.findByTestId("modal");
      expect(router.state.location.hash).toBe("#highlight");
      // have children in it === modal is opening
      expect(modal.children.length).toBe(1);
    });
    test("click configuration open modal with #configurations", async () => {
      const { user, router } = renderComponent();
      const btnConfiguration = await screen.findByRole("button", {
        name: new RegExp("Configurations", "i"),
      });
      await user.click(btnConfiguration);
      const modal = await screen.findByTestId("modal");
      expect(router.state.location.hash).toBe("#configurations");
      // have children in it === modal is opening
      expect(modal.children.length).toBe(1);
    });
    test("click product's color open modal with #(color)", async () => {
      const { user, router } = renderComponent();
      const productColor = product.colors[0];
      const btnColor = await screen.findByRole("button", {
        name: new RegExp(`carousel-${productColor}`, "i"),
      });
      await user.click(btnColor);
      const modal = await screen.findByTestId("modal");
      expect(router.state.location.hash).toBe(`#${productColor}`);
      // have children in it === modal is opening
      expect(modal.children.length).toBe(1);
    });
  });
  describe("click buy now", () => {
    test("open add to cart modal when clicking buy now btn", async () => {
      const { user } = renderComponent();
      const btn = await screen.findByRole("button", { name: /Mua ngay/i });
      await user.click(btn);
      const modal = await screen.findByTestId("modal");
      const productTitle = within(modal).getByText(product.title);
      const productPrice = within(modal).getByText(product.price);

      // const

      expect(productTitle).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();
    });
    test("have same imgs color length", async () => {
      const { user } = renderComponent();
      const btn = await screen.findByRole("button", { name: /Mua ngay/i });
      await user.click(btn);
      const modal = await screen.findByTestId("modal");
      const imgs = await within(modal).findAllByRole("img");
      // have appropriate name assign to it
      for (let i = 0; i < imgs.length; i++) {
        const imgColorTitle = within(modal).getByText(product.imgCover[i]);
        expect(imgColorTitle).toBeInTheDocument();
      }
      imgs.forEach((img, i) =>
        expect(img).toHaveAttribute("src", product.imgColorsCover[i])
      );
    });
    test("have same color as user chosen color before and have a border around it", async () => {
      const { user } = renderComponent();
      const productColorClicked = product.colors[0];
      const btnColor = await screen.findByRole("button", {
        name: new RegExp(productColorClicked, "i"),
      });
      await user.click(btnColor);
      const btn = await screen.findByRole("button", { name: /Mua ngay/i });
      await user.click(btn);
      const modal = await screen.findByTestId("modal");
      const imgColorChosen = within(
        screen.getByTestId(productColorClicked)
      ).getByRole("img");

      // have appropriate name assign to it
      expect(imgColorChosen.style.borderColor).toBe("var(--color-secondary)");
    });
  });
  describe("click review configuration list", () => {
    test("open modal with #configurations when clicking expand configuration", async () => {
      const { user, router } = renderComponent();

      const btnConfiguration = await screen.findByRole("button", {
        name: /xem thêm cấu hình chi tiết/i,
      });
      await user.click(btnConfiguration);
      const modal = await screen.findByTestId("modal");
      // have children in it === modal is opening
      expect(modal.children.length).toBe(1);
    });
  });
  describe("close modal", () => {
    test("click close and close the modal", async () => {
      const { user, router } = renderComponent();
      const btnHighLight = await screen.findByRole("button", {
        name: new RegExp("highlight", "i"),
      });
      await user.click(btnHighLight);
      const modal = await screen.findByTestId("modal");
      const btnClose=within(modal).getByRole('button',{name:/Close/i})
      await user.click(btnClose)
      // no children === close modal
      expect(modal.children.length).toBe(0)
    });
    // test.only("press esc button and close the modal", async () => {
    //   const { user, router } = renderComponent();
    //   const btnHighLight = await screen.findByRole("button", {
    //     name: new RegExp("highlight", "i"),
    //   });
    //   await user.click(btnHighLight);
    //   // await user.
    //   await screen.findByTestId("modal");
    //   await user.keyboard('{Escape}')
    //   // no children === close modal
    //   const modal = await screen.findByTestId("modal");
    //   screen.debug(modal)
    //   // expect(modal.children.length).toBe(0)
    // });
  });
});
function wait() {
  return new Promise((resolve) => setTimeout(() => resolve("123"), 100));
}
