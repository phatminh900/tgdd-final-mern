import React from "react";
import CartItem from "../cart-item/cart-item.container";
import useCartListHook from "./cart-list.hook";
import styles from "./cart-list.module.scss";
const CartList = () => {
  const cart = useCartListHook();
  return (
    <ul data-testid="cart-list" className={styles.cart__list}>
      {cart.map((product) => (
        <CartItem key={product.id + product.currentColor} {...product} />
      ))}
    </ul>
  );
};

export default CartList;
