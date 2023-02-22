import {
  ResponseStatus,
  ResponseStatusMessage,
} from "interfaces/response.interface";
import React from "react";
import { Navigation } from "react-router-dom";

const useChangeTextSubmit = (
  state: Navigation,
  responseStatus: string | undefined
) => {
  const isLoading = state.state === "submitting";
  const isSuccess = responseStatus === "success";
  return { isLoading, isSuccess };
};

export default useChangeTextSubmit;
