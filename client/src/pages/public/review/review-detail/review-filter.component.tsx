import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../review.module.scss";
interface ReviewFilterProps {
  ratingChosen: string | null;
  ratingNumbers: number[];
  getReviewsBasedOnRating: (e: React.MouseEvent<Element, MouseEvent>) => void;
  pathname: string;
}
const ReviewFilter = ({
  ratingChosen,
  ratingNumbers,
  getReviewsBasedOnRating,
  pathname,
}: ReviewFilterProps) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.reviews__filter} flex-vt-ct`}>
      <p className="text-bold">Lọc theo: </p>
      <ul className={`${styles["reviews__filter--list"]} flex-vt-ct`}>
        <li
          className={`${styles["reviews__filter--item"]} ${
            !ratingChosen && styles.active
          }`}
        >
          <button
            // data-rating-number={ratingNumber}
            onClick={() => navigate(pathname)}
            className={styles["reviews__filter--btn"]}
          >
            Tất cả
          </button>
        </li>
        {ratingNumbers.map((ratingNumber) => (
          <li
            key={ratingNumber}
            className={`${styles["reviews__filter--item"]}  ${
              // rating query exist and equals rating number
              ratingChosen && +ratingChosen === ratingNumber
                ? styles.active
                : ""
            }`}
          >
            <button
              data-rating-number={ratingNumber}
              onClick={getReviewsBasedOnRating}
              className={styles["reviews__filter--btn"]}
            >
              {ratingNumber} sao
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewFilter;
