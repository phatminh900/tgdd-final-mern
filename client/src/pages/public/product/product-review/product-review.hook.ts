import { useCallback, useState } from "react";
import { useAppDispatch } from "store/hooks.store";
import { useLocation, useNavigate } from "react-router-dom";
import { IReviewDocument } from "service/review.service";
import useModalHook from "components/ui/modal/modal.hook";
import { sendReview } from "service/review.service";

const useProductReview = (category:string) => {
  const { isOpenModal, onToggleModal, setIsOpenModal } = useModalHook();
  const dispatch = useAppDispatch();
  const [currentRating, setCurrentRating] = useState(0);

  const onPreChooseRating = useCallback((rating: number) => {
    setCurrentRating(rating);
  },[])

  const navigate = useNavigate();
  const location = useLocation();
  const onSubmitReview = useCallback(async (review: IReviewDocument, productId: string) => {
    await dispatch(
      sendReview(
        category as "laptops" | "phones",
        review,
        productId
      )
    );

    setTimeout(() => {
      onToggleModal();
    }, 1000);
  },[])
  return {
    isOpenModal,
    setIsOpenModal,
    onSubmitReview,
    navigate,
    onToggleModal,
    location,
    onPreChooseRating,
    currentRating
  };
};

export default useProductReview;
