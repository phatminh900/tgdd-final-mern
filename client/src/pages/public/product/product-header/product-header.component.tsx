import React from "react";
import styles from "../product.module.scss";
import ProductLinks from "../product-links/product-links.component";
import useWindowDimensions from "hooks/useWindowDimensions";

import { ICurrentProduct } from "../product.interface";
import { ReviewOverall } from "components";

interface ProductHeaderProps {
  firm: string;
  category: string;
  ratingQuantity: number;
  ratingAverage: number;
  title: string;
}
const ProductHeader = ({
  firm,
  category,
  ratingAverage,
  ratingQuantity,
  title,
}: ProductHeaderProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.header}>
      <ProductLinks firm={firm} category={category} />
      {width >= 1200 && (
        <div className={`${styles.info}  flex-vt-ct`}>
          <h3 className={styles.title}>Điện thoại {title} </h3>
          <a href="#reviews" className="flex-vt-ct">
            <ReviewOverall
              ratingAverage={ratingAverage}
              ratingQuantity={ratingQuantity}
              className={styles.reviews}
            />
            <span className={styles["reviews__text"]}>
              {ratingQuantity} Đánh giá
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProductHeader);
