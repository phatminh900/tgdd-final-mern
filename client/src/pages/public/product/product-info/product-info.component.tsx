import React from "react";
import { ReviewOverall } from "components";
import styles from "../product.module.scss";
import { IProductRating } from "../product.interface";
interface ProductInfoProps extends IProductRating{
  title: string;

}
const ProductInfo = ({
  title,
  ratingAverage,
  ratingQuantity,
}: ProductInfoProps) => {
  return (
    <div className={`${styles.info}  flex-vt-ct`}>
      <h3 className={styles.title}>Điện thoại {title}</h3>
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
  );
};

export default ProductInfo;
