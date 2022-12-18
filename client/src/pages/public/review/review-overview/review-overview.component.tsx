import React from "react";
import { IProductReview } from "../review.interface";
import styles from "../review.module.scss";
import Price from "components/price/price.component";
import { ReviewOverall, Ratings } from "components";
interface ReviewOverViewProps {
  reviews: IProductReview;
}
const ReviewOverView = ({ reviews }: ReviewOverViewProps) => {
  return (
    <div className={styles.reviews__overview}>
      <figure className={`${styles.reviews__product} `}>
        <div className={`${styles["reviews__product-details-box"]} flex-vt-ct`}>
          <img width={710} height={535} src={reviews.imgCover} alt="product" />
          <div className={styles.reviews__details}>
            <p>{reviews.title}</p>
            <Price price={reviews.price} />
          </div>
        </div>
      </figure>

      <div className={`${styles.reviews__ratings} flex-vt-ct`}>
        <div className={`${styles["reviews__ratings-overall"]} flex-both-ct`}>
          <p className={styles.reviews__average}>{reviews.ratingAverage}</p>
          <ReviewOverall
            ratingAverage={reviews.ratingAverage}
            ratingQuantity={reviews.ratingQuantity}
          />
        </div>
        <Ratings
          className={styles["reviews__ratings-stars"]}
          reviews={reviews.reviews}
          ratingQuantity={reviews.ratingQuantity}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ReviewOverView;
