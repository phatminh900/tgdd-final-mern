import React from "react";
import { GiAlliedStar } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";

import styles from "./product-review.module.scss";
import { Button, Modal, Ratings, ReviewOverall, UserReview } from "components";
import PhoneNoReview from "./product-no-review.component";
// img
import ProductReviewRating from "./product-review-rating.components";

import { IProductType } from "interfaces/allProductsType.interface";
import useProductReview from "./product-review.hook";
import { IProductRating } from "../product.interface";

interface IProductReviewProps extends IProductRating {
  title: string;
  category: string;
  id: string;
  imgCover: string;
  type: string;
  reviews: IProductType["currentProduct"]["reviews"];
}
const ProductReview = ({
  category,
  type,
  id,
  imgCover,
  title,
  ratingAverage,
  ratingQuantity,
  reviews,
}: IProductReviewProps) => {
  const {
    isOpenModal,
    onToggleModal,
    setIsOpenModal,
    onSubmitReview,
    navigate,
    location,
    onPreChooseRating,
    currentRating,
  } = useProductReview(category);
  return (
    <div id="reviews" className={styles["product-reviews"]}>
      <h3 className={styles.title}>Đánh giá {title}</h3>
      {ratingQuantity > 0 && (
        <div className=" gap-8px flex-vt-ct">
          <p className={styles["product-reviews__ratingAvg"]}>
            {ratingAverage}
          </p>

          <ReviewOverall
            ratingQuantity={ratingQuantity}
            ratingAverage={ratingAverage}
          />
          <p className={styles["product-reviews__rating-text"]}>
            {ratingQuantity} Đánh giá
          </p>
        </div>
      )}
      <div className={`${styles["product-reviews-modal__box"]} `}>
        <Modal isOpen={isOpenModal}>
          <ProductReviewRating
            onSubmitReview={onSubmitReview}
            isOpenModal={isOpenModal}
            userPreChooseRating={currentRating}
            title={title}
            imgCover={imgCover}
            id={id}
            type={type}
            onToggleModal={onToggleModal}
            onPreChooseRating={onPreChooseRating}
            setIsOpenModal={setIsOpenModal}
          />
        </Modal>
      </div>
      {!(ratingQuantity > 0) && (
        <PhoneNoReview
        title={title}
        id={id}
        imgCover={imgCover}
        type={type as 'laptop'|'phone'}
          onSubmitReview={onSubmitReview}
          isOpenModal={isOpenModal}
          onPreChooseRating={onPreChooseRating}
          userPreChooseRating={currentRating}
          onToggleModal={onToggleModal}
        />
      )}
      {ratingQuantity > 0 && (
        <>
          <Ratings reviews={reviews} ratingQuantity={ratingQuantity} />

          {reviews.slice(0, 2).map((review) => (
            <UserReview key={uuidv4()} review={review} />
          ))}
          <div
            className={`${styles["product-reviews__actions"]} flex gap-12px`}
          >
            <Button btnType="secondary" onClick={() => onToggleModal()}>
              <GiAlliedStar />
              Viết đánh giá
            </Button>
            <Button
              onClick={() => {
                navigate(location.pathname + "/reviews");
              }}
              btnType="neutral"
            >
              Xem {ratingQuantity} đánh giá
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductReview;
