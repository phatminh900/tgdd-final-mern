import React from "react";
import styles from "./product-price.module.scss";
import { Price } from "components";
const ProductPrice = ({ price }: { price: number }) => {
  return (
    <div className={`${styles.price} flex-vt-ct`}>
      Giá: <Price price={price} />
    </div>
  );
};

export default ProductPrice;
