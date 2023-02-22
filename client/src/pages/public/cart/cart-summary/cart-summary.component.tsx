import React from "react";
import Price from "components/price/price.component";
import useCartState from "store/cart/cart-slice.hook";
import useCartSummaryHook from "./cart-summary.hook";
import styles from "./cart-summary.module.scss";
import { Button } from "components";

interface CartSummaryProps {
  checkout: () => Promise<
    | {
        payload: any;
        type: string;
      }
    | undefined
  >;
}
const CartSummary = ({ checkout }: CartSummaryProps) => {
  const cartState = useCartState();
  const { totalPrice } = useCartSummaryHook();

  return (
    <div data-testid='cart-summary-container' className={styles.summary}>
      <div className={`${styles.total} flex-vt-ct`}>
        <p className="text-bold">Tổng tiền </p>
        <Price price={cartState.priceAfterApplyingDiscount || totalPrice} />
      </div>
      <Button btnType="primary" onClick={checkout}> Mua ngay</Button>
    </div>
  );
};

export default CartSummary;
