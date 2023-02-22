import { IReviewDocument } from "service/review.service";

export interface IProductReviewRating {
  isOpenModal: boolean;
  onToggleModal: () => void;
  userPreChooseRating: number;
  onSubmitReview: (review: IReviewDocument, productId: string) => void;
  onPreChooseRating?: (number: number) => void;
  setIsOpenModal: (state: boolean) => void;
}

