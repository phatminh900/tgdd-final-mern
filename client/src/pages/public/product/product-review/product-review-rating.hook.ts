import  { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {  useLocation } from "react-router-dom";
import { IAuthContext, useAuth } from "context/auth.context";
import useAppStateHook from "store/appState/appState.hook";

import { appStateActions } from "store/appState/app-state-slice";
const useProductReviewRating = (userPreChooseRating: number) => {
  const { user } = useAuth() as IAuthContext;
  const { isLoading, error, isSuccess } = useAppStateHook(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // input
  const [userRating, setUserRating] = useState(userPreChooseRating);
  const onSetUserRating = (rating: number) => setUserRating(rating)
  const [reviewText, setReviewText] = useState("");
  const fileRef = useRef<null | HTMLInputElement>(null);
  
  // parent
  // useEffect(() => {
  //   // after error user typing clear error
  //   userRating && reviewText && dispatch(appStateActions.resetState());
  // }, [userRating, reviewText, dispatch]);
  return {
    user,
    isLoading,
    error,
    isSuccess,
    pathname,userRating,
    onSetUserRating,
    reviewText,
    fileRef,
    setReviewText
  };
};

export default useProductReviewRating;
