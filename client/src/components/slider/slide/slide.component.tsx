import React from "react";
import styles from "./slides.module.scss";
interface ISlidesProps {
  index: number;
  currentSlide: number;
  onToggleModal?: () => void;
  slide: string | string[];
}
const Slide = ({
  onToggleModal,
  slide,
  index,

}: ISlidesProps) => {
  return (
    <div data-testid='slide' onClick={onToggleModal} className={`${styles.slide} slide`}>
      {typeof slide === "string" ? (
        <img src={slide} alt="Slider" />
      ) : (
        <img srcSet={`${slide[0]} 1x,${slide[1]} 2x`} alt="Slider" />
      )}
    </div>
  );
};

export default React.memo(Slide);
