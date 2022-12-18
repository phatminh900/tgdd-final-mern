import React from "react";
import styles from "../product.module.scss";
type ProductColorProps = {
  onChangeCurrentColor: (color: string) => void;
  colors: string[];
  currentColor: string;
};
const ProductColor = ({
  onChangeCurrentColor,
  colors,
  currentColor,
}: ProductColorProps) => {
  return (
    <div className={`${styles.colors}  flex`}>
      {colors.map((color: string) => (
        <button
          onClick={(e) =>
            onChangeCurrentColor(
              (e.target as HTMLButtonElement).closest("button")!.dataset.color!
            )
          }
          data-color={color}
          className={`${styles["btn-color"]} ${
            currentColor === color ? "active" : ""
          } btn`}
          key={color}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ProductColor;
