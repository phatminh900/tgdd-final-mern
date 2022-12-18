import React from "react";
import styles from "../product.module.scss";
import ProductLinks from "../product-links/product-links.component";
import useWindowDimensions from "hooks/useWindowDimensions";

import { ICurrentProduct } from "../product.interface";
import { ReviewOverall } from "components";

interface ProductHeaderProps extends ICurrentProduct {}
const ProductHeader = ({ currentProduct }: ProductHeaderProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.header}>
      <ProductLinks
        firm={currentProduct.firm}
        category={currentProduct.category}
      />
      {width >= 1200 && (
        <div className={`${styles.info}  flex-vt-ct`}>
          <h3 className={styles.title}>Điện thoại {currentProduct.title} </h3>
          <a href="#reviews" className="flex-vt-ct">
            <ReviewOverall
              ratingAverage={currentProduct.ratingAverage}
              ratingQuantity={currentProduct.ratingQuantity}
              className={styles.reviews}
            />
            <span className={styles["reviews__text"]}>
              {currentProduct.ratingQuantity} Đánh giá
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProductHeader);
