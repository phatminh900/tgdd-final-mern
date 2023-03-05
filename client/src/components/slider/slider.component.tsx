import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styles from "./slider.module.scss";
import useSlider from "./slider.hook";
import SlideBox from "./slide-box/slide-box";
import Dot from "./dot/dot.component";

interface SliderProps {
  maxSlideLength: number;
  slides?: string[];
  onToggleModal?: (e?: React.MouseEvent) => void;
  isOpenModal?: boolean;
  className: string;
  usingDots?: boolean;
  usingImgs?: boolean;
  isLink?: boolean;
  links?: {
    id: number;
    path: string;
    slide: string | string[];
  }[];
  currentSlideNumber?: number;
  onSetCurrentSlideNumber?: (number: number) => void;
  autoScroll?: boolean;
}
const Slider = ({
  maxSlideLength,
  slides,
  usingDots,
  className,
  usingImgs,
  isOpenModal,
  onToggleModal,
  currentSlideNumber,
  onSetCurrentSlideNumber,
  isLink = false,
  autoScroll,
  links,
}: SliderProps) => {
  const { currentSlide, nextSlide, prevSlide, gotoSlide } = useSlider({
    isOpenModal,
    maxSlideLength,
    onToggleModal,
    autoScroll,
    currentSlideNumber,
    onSetCurrentSlideNumber,
  });

  return (
    <>
      <div data-testid="slides" className={`${styles.slider} ${className}`}>
        {isLink &&
          links &&
          links.map((link, i) => (
            <SlideBox
              key={link.path}
              translatePercentage={i - currentSlide}
              onToggleModal={onToggleModal}
              currentSlide={currentSlide}
              index={i}
              slide={link.slide}
              path={link.path}
            />
          ))}
        {slides &&
          slides.map((slide, i) => (
            <SlideBox
              key={slide}
              translatePercentage={i - currentSlide}
              onToggleModal={onToggleModal}
              currentSlide={currentSlide}
              index={i}
              slide={slide}
            />
          ))}
        <button
          role={"button"}
          aria-label="navigate-image-left"
          className={`${styles.btn} ${styles["btn--left"]} center-vt-absolute`}
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          role={"button"}
          aria-label="navigate-image-right"
          className={`${styles.btn} ${styles["btn--right"]}    center-vt-absolute`}
          onClick={nextSlide}
        >
          <AiOutlineArrowRight />
        </button>

        {usingDots && (
          <div
            className={`${styles.dots} flex gap-4px center-hr-left-absolute `}
          >
            {links &&
              links.map((link, index) => (
                <Dot
                  currentSlide={currentSlide}
                  index={index}
                  path={link.path}
                  gotoSlide={gotoSlide}
                />
              ))}
          </div>
        )}
      </div>
      {usingImgs && (
        <ul className={`${styles["list-slides-img"]} `}>
          {slides &&
            slides.map((slide, index) => (
              <li
                key={slide}
                className={`${styles.slide} ${
                  currentSlide === index ? styles.active : ""
                }`}
              >
                <button
                  className="flex-vt-ct"
                  onClick={(e) => {
                    const index = +(e.target as HTMLElement).closest("button")!
                      .dataset.index!;
                    gotoSlide(index);
                  }}
                  data-index={index}
                >
                  <img
                    width={800}
                    height={200}
                    src={slide}
                    alt="img highlight"
                  />
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default React.memo(Slider);
