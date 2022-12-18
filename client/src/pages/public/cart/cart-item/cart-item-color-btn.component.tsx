import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./cart-item.module.scss";
type CartItemColorBtnProps = {
  toggleColorList: () => void;
  currentColor: string;
};
const CartItemColorBtn = ({
  toggleColorList,
  currentColor,
}: CartItemColorBtnProps) => {
  return (
    <button
      className={`${styles["cart-item__btn-color"]} gap-6px flex-vt-ct`}
      onClick={toggleColorList}
    >
      Màu:{currentColor} <AiFillCaretDown />
    </button>
  );
};

export default CartItemColorBtn;
