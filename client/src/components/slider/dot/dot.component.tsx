import React from "react";
import styles from "../slider.module.scss";

type DotsProps = {
  index: number;
  currentSlide: number;
  path: string;
  gotoSlide: (slide: number) => void;
};
const Dot = ({ currentSlide, index, path, gotoSlide }: DotsProps) => {
  return (
    <button
      onClick={(e) => {
        const index = +(e.target as HTMLElement).closest("button")!.dataset
          .index!;
        gotoSlide(index);
      }}
      key={path}
      data-index={index}
      className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
    >
      &nbsp;
    </button>
  );
};

export default Dot;
