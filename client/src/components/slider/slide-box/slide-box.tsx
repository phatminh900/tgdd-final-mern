import React from "react";
import { Link } from "react-router-dom";
import styles from "../slider.module.scss";
import Slides from "../slide/slide.component";
const SlideBox = ({
  slide,
  path,
  translatePercentage,
  onToggleModal,
  currentSlide,
  index,
  isLink,
}: {
  index: number;
  isLink?: boolean;
  currentSlide: number;
  onToggleModal?: (e?: React.MouseEvent) => void;
  slide: string | string[];
  path?: string;
  translatePercentage: number;
}) => {
  const Slide = (
    <Slides
      onToggleModal={onToggleModal}
      index={index}
      currentSlide={currentSlide}
      slide={slide}
    />
  );
  return (
    <div
      data-testid="slide-box"
      className={styles["slide-box"]}
      style={{ translate: `${translatePercentage * 100}%` }}
    >
      {isLink && path ? <Link to={path}>{Slide}</Link> : Slide}
    </div>
  );
};

export default SlideBox;
