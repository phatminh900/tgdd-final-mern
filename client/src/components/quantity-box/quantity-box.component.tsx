import React from "react";
import styles from "./quantity-box.module.scss";

type QuantityBoxProps = {
  quantity: number;
  changeQuantityItem: (quantity: number) => void;
};
const QuantityBox = ({ quantity, changeQuantityItem }: QuantityBoxProps) => {
  const decreaseQuantity = (e: React.MouseEvent) => {
    if (quantity === 1) return;
    changeQuantityItem(quantity - 1);
  };
  const increaseQuantity = (e: React.MouseEvent) => {
    (e.target as HTMLButtonElement).classList.add("hello");
    changeQuantityItem(quantity + 1);
  };
  return (
    <div className={`${styles["quantity-box"]} flex-vt-ct`}>
      <button
        value={quantity}
        onClick={decreaseQuantity}
        style={{
          color: quantity === 1 ? "#777" : "var(--color-tertiary)",
        }}
        className={`${styles["quantity-box__btn-quantity"]} ${styles["quantity-box__btn-quantity--decrease"]}`}
      >
        &ndash;
      </button>
      <div data-testid="quantity" className={styles["quantity-box__quantity"]}>
        {quantity}
      </div>
      <button
        onClick={increaseQuantity}
        className={`${styles["quantity-box__btn-quantity"]} ${styles["quantity-box__btn-quantity--increase"]}`}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
