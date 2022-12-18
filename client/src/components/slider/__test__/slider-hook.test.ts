import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";

import useSlider from "../slider.hook";

describe("useSlider", () => {
  describe("transition between slides", () => {
    // it("should increase current Slide by one", () => {
    //   const sliderTestData = { isOpenModal: false, maxSlideLength: 5 };
    //   const { result } = renderHook(() => useSlider(sliderTestData));
    //   const currentSlide = result.current.currentSlide;
    //   act(() => {
    //     result.current.nextSlide();
    //   });
    //   expect(result.current.currentSlide).toBe(currentSlide + 1);
    // });
    it("should set current slide to 0 when the last slide === maxLength of the slides", () => {
      const sliderTestData = { isOpenModal: false, maxSlideLength: 2 };
      const { result, rerender } = renderHook(() => useSlider(sliderTestData));
      act(() => {
        // 0
        result.current.nextSlide();
      });
      act(() => {
        // 1
        result.current.nextSlide();
      });

      //max length slide =2
      expect(result.current.currentSlide).toBe(0);
    });
  });
});
