import React from "react";
import styles from "./cart-item.module.scss";
type CartItemColorItemProps = {
  currentProductColor: string;
  color: string;
  imgSrc: string;
  changeCurrentColor: (color: string) => void;
};
const CartItemColorItem = ({
  currentProductColor,
  color,
  imgSrc,
  changeCurrentColor,
}: CartItemColorItemProps) => {
  return (
    <li
      onClick={() => changeCurrentColor(color)}
      className={`${styles["cart-item__colors-item"]} ${
        currentProductColor === color && styles.active
      } flex-vt-ct`}
    >
      <img height={30} width={30} src={imgSrc} alt="product color" />
      <p data-testid="cart-item-color">{color}</p>
    </li>
  );
};

export default CartItemColorItem;
