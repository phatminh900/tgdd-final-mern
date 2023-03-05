import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import ProductReviewStars from "./product-reviews-stars.component";
import { BtnClose, Button } from "components";
import styles from "./product-review.module.scss";
import { JWTKEY } from "app-constants/browser.constatnt";
import { appStateActions } from "store/appState/app-state-slice";
import { IProductReviewRating } from "./product-review.interface";
import { useAppDispatch } from "store/hooks.store";
import useProductReviewRating from "./product-review-rating.hook";
import { IReviewDocument } from "service/review.service";
export interface ProductReviewRatingProps extends IProductReviewRating {
  id: string;
  title: string;
  type: string;
  imgCover: string;
}

const ProductReviewRating = ({
  title,
  id,
  imgCover,
  onToggleModal,
  type,
  isOpenModal,
  onSubmitReview,
  userPreChooseRating,
  setIsOpenModal,
}: ProductReviewRatingProps) => {
  const {
    user,
    isLoading,
    error,
    isSuccess,
    userRating,
    pathname,
    onSetUserRating,
    reviewText,
    fileRef,
    setReviewText,
  } = useProductReviewRating(userPreChooseRating);
  const dispatch = useAppDispatch();
  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRating) {
      return dispatch(appStateActions.setError("Please choose rating number."));
    }
    if (!reviewText) {
      return dispatch(
        appStateActions.setError("Please let us know your reviews..")
      );
    }
    if (!user) return;
    const form = new FormData();
    // @ts-ignore
    form.append("review", reviewText);
    form.append("productId", id!);
    form.append(type, id!);
    // @ts-ignore
    fileRef.current!.files[0] &&
      form.append(
        "photo",
        // @ts-ignore
        fileRef.current!.files[0],
        // @ts-ignore
        fileRef.current!.files[0].name
      );
    form.append("rating", String(userRating));
    form.append("user", user._id);

    onSubmitReview(form as unknown as IReviewDocument, id);
    dispatch(appStateActions.setFinishLoading());
  };
  const text = isLoading ? "Submitting..." : "Gửi đánh giá";

  return (
    <>
      <div
        className={`${styles["product-reviews-modal"]} center-both-absolute`}
      >
        <div
          className={`${styles["product-reviews-modal__header"]} flex-vt-ct`}
        >
          <p>Đánh giá</p>
          <BtnClose
            className={styles["product-reviews-modal__btn-close"]}
            onClick={() => setIsOpenModal(false)}
          />
        </div>
        <div className={styles["product-reviews-modal__body"]}>
          <div
            className={`${styles["product-reviews-modal__name"]} flex-vt-ct`}
          >
            <img height={65} width={65} src={imgCover!} alt="Product" />
            <p>{title}</p>
          </div>
          <ProductReviewStars
            isOpenModal={isOpenModal}
            title={title}
            imgCover={imgCover}
            id={id}
            type={type}
            onToggleModal={onToggleModal}
            onSetUserRating={onSetUserRating}
            userPreChooseRating={userRating}
          />
          <form
            onSubmit={submitReview}
            className={styles["product-reviews-modal__form"]}
          >
            <textarea
              // value={reviewText}
              onChange={(e) =>
                setReviewText((e.target as HTMLTextAreaElement).value)
              }
              value={reviewText}
              className={styles["product-reviews-modal__text-area"]}
              placeholder="Mời bạn chia sẻ một số cảm nhận về sản phẩm..."
              cols={60}
              rows={5}
            />
            <div
              className={`${styles["product-reviews-modal__upload-file"]} flex-vt-ct`}
            >
              <label className="flex-vt-ct" htmlFor="photo">
                <AiFillCamera /> Gửi hình chụp thật tế.
              </label>
              <input
                ref={fileRef}
                type="file"
                id="photo"
                accept="image/*"
                className={`${styles["product-reviews-modal__input-file"]}`}
              />
            </div>

            {!user && !Cookies.get(JWTKEY) ? (
              <div className={styles["product-reviews-modal__user-login"]}>
                <p>Please login first.</p>
                <Link state={{ prevPath: pathname }} to="/login">
                  Login Here
                </Link>
              </div>
            ) : error ? (
              <p className={styles["product-reviews-modal__err-msg"]}>
                {error}
              </p>
            ) : (
              <Button btnType="secondary">
                {!isSuccess && !isLoading && text}
                {isLoading && text}
                {isSuccess && <BsCheckCircle />}
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductReviewRating);
