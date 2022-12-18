import { ResponseStatusMessage } from "interfaces/response.interface";
import React, { useState } from "react";

const useForgotPasswordHook = (
  forgotPasswordData: ResponseStatusMessage | undefined
) => {
  let error = null;
  let success = undefined;
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  if (forgotPasswordData && forgotPasswordData.status === "fail") {
    error = forgotPasswordData.message;
  }
  if (forgotPasswordData && forgotPasswordData.status === "success") {
    success = forgotPasswordData.message;
  }
  const changeUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return {
    userEmail,
    changeUserValue,
    error,
    success,
  };
};

export default useForgotPasswordHook;
