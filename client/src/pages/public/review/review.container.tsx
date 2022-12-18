import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import styles from "./review.module.scss";
import { UserReview } from "components";
import { NotFound } from "../NotFound";
import useReviewHook from "./review.hook";
import { getReviewReactRouter } from "service/review.service";
import { IProductReview } from "./review.interface";
import ReviewHeader from "./review-header/review-header.component";
import ReviewOverView from "./review-overview/review-overview.component";
import ReviewFilter from "./review-detail/review-filter.component";
import ReviewPagination from "./review-detail/review-pagination.component";
// let initial = true;
const Review = () => {
  const reviews = useLoaderData() as IProductReview;
  const {
    currentReviews,
    ratingNumbers,
    pathname,
    paginationNumbers,
    slug,
    getReviewsBasedOnRating,
    changePage,
    ratingChosen,
    page,
  } = useReviewHook(reviews);
  if (!reviews) return <NotFound />;

  return (
    <div className={styles.reviews}>
      <ReviewHeader reviews={reviews} slug={slug!} />
      <div className={styles.reviews__body}>
        <h3>
          {reviews.ratingQuantity} đánh giá {reviews.title}
        </h3>
        <ReviewOverView reviews={reviews} />
        <div className={styles.reviews__reviews}>
          <ReviewFilter
            getReviewsBasedOnRating={getReviewsBasedOnRating}
            pathname={pathname}
            ratingNumbers={ratingNumbers}
            ratingChosen={ratingChosen}
          />
          <ul className={styles["reviews__reviews-list"]}>
            {currentReviews.map((review) => (
              <UserReview key={review._id} review={review} />
            ))}
          </ul>
          <ReviewPagination
            changePage={changePage}
            page={page}
            paginationNumbers={paginationNumbers}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const productReviews = url.pathname.split("/")[1];
  try {
    const { data: reviews } = (await getReviewReactRouter(
      productReviews as "laptops" | "phones",
      params.slug!
    )) as { data: IProductReview };
    return reviews;
  } catch (error) {
    return error;
  }
};
