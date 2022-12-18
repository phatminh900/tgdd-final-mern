import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks.store";
import {
  appStateActions,
  selectStateErr,
  selectStateLoading,
  selectStateSuccess,
} from "./app-state-slice";
const useAppStateHook = (reset: boolean = false) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectStateLoading);
  const error = useAppSelector(selectStateErr);
  const isSuccess = useAppSelector(selectStateSuccess);
  //   use reset all state
  useEffect(() => {
    if (reset) dispatch(appStateActions.resetState());
  }, [reset, dispatch]);
  return { isLoading, error, isSuccess };
};

export default useAppStateHook;
