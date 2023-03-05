import { AuthComponent, Input } from "components";
import BtnSubmit from "components/btn/btn-submit/btn-submit.component";
import { ResponseStatusMessage } from "interfaces/response.interface";
import {
  LoaderFunctionArgs,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { resetPassword } from "service/user.service";
import useResetPasswordHook from "./reset-password.hook";
import useChangeTextSubmit from "hooks/useChangeTextSubmit.hook";
const ResetPassword = () => {
  const resetPasswordValue = useActionData() as ResponseStatusMessage;
  const { userValue, changeUserValue, successMessage, error } =
    useResetPasswordHook(resetPasswordValue);
  const navigation = useNavigation();
  const { isLoading, isSuccess } = useChangeTextSubmit(
    navigation,
    resetPasswordValue?.status
  );
  const text =
    navigation.state === "submitting" ? "Submitting" : "Change your password";
  return (
    <AuthComponent successMessage={successMessage} error={error}>
      <Input
        value={userValue.password}
        onChange={changeUserValue}
        label="New Password"
        id="password"
        type="password"
      />
      <Input
        value={userValue.passwordConfirm}
        onChange={changeUserValue}
        label="Password Confirm"
        id="passwordConfirm"
        type="password"
      />
      <BtnSubmit isLoading={isLoading} isSuccess={isSuccess} text={text} />

      
    </AuthComponent>
  );
};

export default ResetPassword;
export const action = async ({ request, params }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const userValue = {
    password: formData.get("new password") as string,
    passwordConfirm: formData.get("password confirm") as string,
  };
  try {
    const data = await resetPassword(params.token!, userValue);
    return data;
  } catch (error) {
    return error;
  }
};
