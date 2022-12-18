import React from "react";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "store/main.store";
import useProductHook from "../product.hook";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";
import { BrowserRouter } from "react-router-dom";
import { ICartProductDocument } from "store/cart/cartProductDocument";

const createWrapperProductHook = () => {
  const store = setupStore();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
  const currentProductNeccessaryProperties: unknown = {
    colors: ["black", "yellow", "sliver"],

    imgs: {
      imgHighlights: ["/highlight1", "/highlight2"],
      imgConfiguration: ["/imgconfiguration"],
      imgGeneralInformation: ["/imgConfiguratong"],
      black: ["/imgblack1", "/imgblack2", "/imgblack3"],
      yellow: ["/imgyellow1", "/imgyellow2", "/imgyellow3"],
      sliver: ["/imgsliver1", "/imgsliver2", "/imgsliver3"],
    },
  };
  return { currentProductNeccessaryProperties, wrapper, store };
};

describe("useProductHook", () => {
  describe("open modal", () => {
    it("should toggle isModalOpen state", () => {
      const { currentProductNeccessaryProperties, wrapper } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      act(() => {
        result.current.onToggleModal();
      });
      expect(result.current.productModalState.isOpenModal).toBe(true);
      act(() => {
        result.current.onToggleModal();
      });
      //   expect(result.productModalState.isOpenModal).toBe(false);
    });
    it("should toggle isModalOpen state and checkout modal is false", () => {
      const { currentProductNeccessaryProperties, wrapper } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      act(() => {
        result.current.onToggleModal();
      });
      expect(result.current.productModalState.isOpenCheckoutModal).toBe(false);
    });
    it("should open checkout modal normal modal is false", () => {
      const { currentProductNeccessaryProperties, wrapper } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );

      act(() => {
        result.current.onOpenProductCarousel();
      });
      expect(result.current.productModalState.isOpenModal).toBe(true);
      expect(result.current.productModalState.isOpenCheckoutModal).toBe(false);
    });
    it("should open carousel modal checkout modal is false", () => {
      const { currentProductNeccessaryProperties, wrapper } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      act(() => {
        result.current.onOpenCheckoutModal();
      });
      expect(result.current.productModalState.isOpenModal).toBe(false);
      expect(result.current.productModalState.isOpenCheckoutModal).toBe(true);
    });
  });
  describe("change current Color", () => {
    it("should change current color of product", () => {
      const { currentProductNeccessaryProperties, wrapper } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      // @ts-ignore
      const expectColor = currentProductNeccessaryProperties.colors[2];
      act(() => {
        result.current.changeCurrentColor(expectColor);
      });
      expect(result.current.currentColor).toBe(expectColor);
    });
  });
  describe("add products to cart", () => {
    it("should add product to cart", () => {
      const { currentProductNeccessaryProperties, wrapper, store } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      const oldCartLength = store.getState().cart.cart.length;
      act(() => {
        // open cart
        result.current.onOpenCheckoutModal();
        //
        result.current.addToCart({} as ICartProductDocument);
      }); //
      const newCartLength = store.getState().cart.cart.length;
      expect(result.current.productModalState.isOpenModal).toBe(false);
      expect(result.current.isProductAdded).toBe(true);
      expect(newCartLength).toBe(oldCartLength + 1);
    });
  });
  describe("set current highlight img slide number", () => {
    it("should set current Highlight img", () => {
      const { currentProductNeccessaryProperties, wrapper, store } =
        createWrapperProductHook();
      const { result } = renderHook(
        () =>
          useProductHook(
            currentProductNeccessaryProperties as unknown as
              | ILaptopDocument
              | IPhoneDocument
          ),
        { wrapper }
      );
      const expectedCurrentHighlightsImg = 3;
      act(() => {
        // open cart
        result.current.onSetCurrentHighlightsImgNumber(
          expectedCurrentHighlightsImg
        );
      }); //
      expect(result.current.currentHighlightsImgNumber).toBe(
        expectedCurrentHighlightsImg
      );
    });
  });
});
