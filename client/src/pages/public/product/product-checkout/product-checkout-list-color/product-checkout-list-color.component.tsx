import React from "react";
import styles from "../product-checkout.module.scss";
type ProductCheckoutListColorProps = {
  imgColorsCover: string[];
  colors: string[];
  currentColor: string;
  onChangeCurrentColor: (color: string) => void;
};
const ProductCheckoutListColor = ({
  imgColorsCover,
  colors,
  currentColor,
  onChangeCurrentColor,
}: ProductCheckoutListColorProps) => {
  return (
    <ul
      data-testid="checkout-color-list"
      className={`${styles["product-checkout__select-color"]} gap-6px flex-vt-ct`}
    >
      {imgColorsCover.map((_, i) => (
        <li key={colors[i]}>
          <button
            data-testid={colors[i]}
            data-color={colors[i]}
            onClick={(e) =>
              onChangeCurrentColor(
                (e.target as HTMLButtonElement).closest("button")!.dataset
                  .color!
              )
            }
            className={`${styles["product-checkout__product"]} gap-6px  ${
              colors[i] === currentColor ? styles.active : ""
            } flex-vt-ct `}
          >
            <img
              width={70}
              height={70}
              className={`${styles["product-checkout__img"]}  flex-both-ct `}
              src={imgColorsCover[i]}
              alt="product color"
            />
            <span
              className={` ${styles["product-checkout__circle"]} flex-both-ct`}
            ></span>
            <p className={styles["product-overview-tab-title"]}>{colors[i]}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductCheckoutListColor;
