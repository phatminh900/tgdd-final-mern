import { renderHook } from "@testing-library/react";
import { ResponseStatusMessage } from "interfaces/response.interface";

import useForgotPasswordHook from "../forgot-password.hook";

describe("useForgotPasswordHook", () => {
  it("should have an err if dataResponse status===fail", () => {
    const testResponse = {
      status: "fail" as "fail",
      message: "something went wrong",
    };
    const { result } = renderHook(() => useForgotPasswordHook(testResponse));
    expect(result.current.error).toBeDefined();
    expect(result.current.error).toBe(testResponse.message);
  });
  it("should have show success  if dataResponse status===success", () => {
    const testResponse = {
      status: "success" as "success",
      message: "Open your email to reset password",
    };
    const { result } = renderHook(() => useForgotPasswordHook(testResponse));
    expect(result.current.success).toBeDefined();
    expect(result.current.success).toBe(testResponse.message);
  });
  it("should only have either success or error", () => {
    const testResponseSuccess = {
      status: "success" as "success",
      message: "Open your email to reset password",
    };
    const { result, rerender } = renderHook((props = testResponseSuccess) => {
      return useForgotPasswordHook(props as ResponseStatusMessage);
    });
    expect(result.current.success).toBeDefined();
    expect(result.current.error).not.toBeTruthy();

    const testResponseFail = {
      status: "fail" as "fail",
      message: "something went wrong",
    };
    rerender(testResponseFail);

    expect(result.current.error).toBeTruthy();
  });
});
