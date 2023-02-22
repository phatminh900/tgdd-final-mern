import styles from "./product-review.module.scss";

import ProductReviewStars from "./product-reviews-stars.component";

import { IProductReviewRating } from "./product-review.interface";

interface ProductNoReviewProps
  extends Omit<IProductReviewRating, "setIsOpenModal" | "currentProduct"> {
    title:string,
    id:string,
    type:'laptop'|'phone'
    imgCover:string;
  }

const ProductNoReview = ({
  onToggleModal,
  isOpenModal,
  type,
  userPreChooseRating,
  onPreChooseRating,
  title,
  id,imgCover
}: ProductNoReviewProps) => {
  return (
    <>
      <p className={styles["product-reviews__notification"]}>
        Hãy đánh giá sản phẩm để giúp những khách hàng khác chọn được sản phẩm
        tốt nhất!
      </p>
      <div className={`${styles["product-reviews__action"]} flex-vt-ct`}>
        <p> Bạn cảm thấy sản phẩm này như thế nào? (chọn sao nhé)</p>
        <ProductReviewStars
          title={title}
          id={id}
          imgCover={imgCover}
          type={type}
          isOpenModal={isOpenModal}
          onToggleModal={onToggleModal}
          userPreChooseRating={userPreChooseRating}
          onPreChooseRating={onPreChooseRating}
        />
      </div>
    </>
  );
};

export default ProductNoReview;
