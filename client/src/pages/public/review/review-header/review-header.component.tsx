import React from "react";
import styles from "../review.module.scss";
import { Link } from "react-router-dom";
import { IProductReview, IReviewDocument } from "../review.interface";
interface ReviewHeaderProps {
  reviews: IProductReview;
  slug: string;
}
const ReviewHeader = ({ reviews, slug }: ReviewHeaderProps) => {
  return (
    <div className={styles.reviews__header}>
      <ul className={`${styles.links} flex-vt-ct`}>
        <Link to={`/${reviews.category.toLowerCase()}`}>
          {reviews.category}
        </Link>
        <Link to={`/${reviews.category.toLowerCase()}/${slug}`}>
          {reviews.title}
        </Link>
        <Link style={{ color: "var(--color-grey)", cursor: "initial" }} to="#">
          Tất cả đánh giá
        </Link>
      </ul>
    </div>
  );
};

export default ReviewHeader;
