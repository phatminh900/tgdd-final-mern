import Price from "components/price/price.component";
import React from "react";
import useCartTemporarySummary from "./cart-temporary-summary.hook";
import styles from "./cart-temporary-summary.module.scss";
const CartTemporarySummary = () => {
  const { totalProducts, totalPrice } = useCartTemporarySummary();
  return (
    <div className={`${styles["cart__summary"]} flex-vt-ct`}>
      <p>Tạm tính ({totalProducts}) sản phẩm:</p>
      <Price price={totalPrice} />
    </div>
  );
};

export default CartTemporarySummary;
