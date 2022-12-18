import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../review.module.scss";
import { IReviewDocument } from "../review.interface";
import { useNavigate } from "react-router-dom";
import { UserReview } from "components";
interface ReviewDetailProps {
  ratingChosen: number;
  ratingNumbers: number[];
  getReviewsBasedOnRating: (e: React.MouseEvent<Element, MouseEvent>) => void;
  currentReviews: IReviewDocument[];
  changePage: (e: React.MouseEvent<Element, MouseEvent>) => void;
  pathname: string;
  page: string | null;
  paginationNumbers: number;
}
const ReviewDetail = ({
  ratingChosen,
  page,
  paginationNumbers,
  pathname,
  ratingNumbers,
  getReviewsBasedOnRating,
  currentReviews,
  changePage,
}: ReviewDetailProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.reviews__reviews}>
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
      <ul className={styles["reviews__reviews-list"]}>
        {currentReviews.map((review) => (
          <UserReview key={review._id} review={review} />
        ))}
      </ul>
      <ul className={`${styles["reviews__pagination-list"]} flex-vt-ct`}>
        {paginationNumbers >= 2
          ? Array.from({ length: paginationNumbers }, (_, i) => {
              //   if(i+1===5) return <li> <button
              //   className={`${styles["reviews__pagination-btn"]} }`}
              // >
              //   5
              // </button></li>

              return (
                <li
                  key={uuidv4()}
                  className={styles["reviews__pagination-item"]}
                >
                  <button
                    onClick={changePage}
                    data-page={i + 1}
                    className={`${styles["reviews__pagination-btn"]} ${
                      !page && i + 1 === 1 && styles.active
                    } ${page && +page === i + 1 ? styles.active : ""}`}
                  >
                    {i + 1}
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ReviewDetail;
