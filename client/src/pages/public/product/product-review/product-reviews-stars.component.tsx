import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./product-review.module.scss";
import { ProductReviewRatingProps } from "./product-review-rating.components";
interface PhoneReviewsStarsProps
  extends Omit<
    ProductReviewRatingProps,
    "setIsOpenModal" | "currentProduct" | "onSubmitReview"
  > {
  onSetUserRating?: (rating: number) => void;
}

const ProductReviewStars = ({
  isOpenModal,
  onToggleModal,
  onSetUserRating,
  onPreChooseRating,
  userPreChooseRating,
}: PhoneReviewsStarsProps) => {
  const chooseStarRating = (e: React.MouseEvent) => {
    !isOpenModal && onToggleModal();
    //already open modal
    isOpenModal &&
      onSetUserRating &&
      onSetUserRating(
        +(e.target as HTMLElement).closest("button")?.dataset.ratingNumber!
      );
  };
  const resetStarRating = () => {
    !isOpenModal && onSetUserRating && onSetUserRating(0);
  };

  const indicateUserRating = (e: React.MouseEvent) => {
    onPreChooseRating &&
      onPreChooseRating(
        +(e.target as HTMLElement).closest("button")?.dataset.ratingNumber!
      );

    onSetUserRating &&
      onSetUserRating(
        +(e.target as HTMLElement).closest("button")?.dataset.ratingNumber!
      );
  };

  const ratingStars = [1, 2, 3, 4, 5].map((rating) => (
    <li key={rating}>
      <button
        type="button"
        data-rating-number={rating}
        onClick={chooseStarRating}
        onMouseLeave={resetStarRating}
        onMouseEnter={indicateUserRating}
      >
        {rating <= userPreChooseRating ? <AiFillStar /> : <AiOutlineStar />}
      </button>
    </li>
  ));
  return (
    <ul className={`${styles["product-reviews__stars"]} flex-both-ct`}>
      {ratingStars}
    </ul>
  );
};

export default React.memo(ProductReviewStars);
