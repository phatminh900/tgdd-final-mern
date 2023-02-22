import { AuthComponent, Button, Input } from "components";
import { ResponseStatusMessage } from "interfaces/response.interface";

import {
  LoaderFunctionArgs,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { forgotPasswordReactRouter } from "service/user.service";
import useForgotPasswordHook from "./forgot-password.hook";
import useChangeTextSubmit from "hooks/useChangeTextSubmit.hook";
import { BsCheckCircle } from "react-icons/bs";

const ForgotPassword = () => {
  const forgotPasswordValue = useActionData() as ResponseStatusMessage;
  const { userEmail, changeUserValue, error, success } =
    useForgotPasswordHook(forgotPasswordValue);
  const navigation = useNavigation();
  const text =
    navigation.state === "submitting"
      ? "Submitting..."
      : "Send email to reset password";
  const { isLoading, isSuccess } = useChangeTextSubmit(
    navigation,
     forgotPasswordValue.status
  );
  // TODO: CHANGE LINK RESET PASSWORD
  return (
    <>
      <AuthComponent successMessage={success} error={error}>
        <Input
          value={userEmail.email}
          onChange={changeUserValue}
          label="Email"
          id="email"
          type="email"
        />
        <Button btnType="secondary">
          {!isSuccess && !isLoading && text}
          {isLoading && text}
          {isSuccess && <BsCheckCircle />}
        </Button>
      </AuthComponent>
    </>
  );
};

export default ForgotPassword;
export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const userEmail = {
    email: formData.get("email") as string,
  };
  try {
    const data = await forgotPasswordReactRouter(userEmail);
    return data;
  } catch (error) {
    const err = error as { status: string; message: string };
    if (err.status === "fail") {
      return err;
    }
    throw err;
  }
};
