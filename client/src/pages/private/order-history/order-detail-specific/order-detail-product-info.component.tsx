import React from "react";
import { Link } from "react-router-dom";
import styles from "./order-detail-specific.module.scss";
import Price from "components/price/price.component";
type OrderDetailProductInfoProps = {
  category: string;
  slug: string;
  imgSrc: string;
  title: string;
  currentColor: string;
  quantity: number;
  price: number;
};
const OrderDetailProductInfo = ({
  category,
  slug,
  imgSrc,
  currentColor,
  title,
  quantity,
  price,
}: OrderDetailProductInfoProps) => {
  return (
    <li className={`${styles["order-history__product-item"]} `}>
      <Link to={`/${category}/${slug}`} className="flex gap-8px">
        <div className="flex gap-10px">
          <img height={75} width={75} src={imgSrc} alt="Product img" />
          <div
            className={`${styles["order-history__product-details"]} flex-column flex-space-between`}
          >
            <p
              data-testid="order-detail-product-title"
              className={styles["order-history__product-title"]}
            >
              {title}
            </p>
            <div className="flex-space-between gap-12px">
              <p data-testid="order-detail-product-color">
                Màu : {currentColor}
              </p>
              <p data-testid="order-detail-product-quantity">
                Số lượng : {quantity}
              </p>
            </div>
          </div>
        </div>
        <Price price={price * quantity} />
      </Link>
    </li>
  );
};

export default OrderDetailProductInfo;
