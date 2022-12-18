import { JWTKEY } from "app-constants/browser.constatnt";
import {
  API_FORGOTPASSWORD,
  API_LOGIN,
  API_RESETPASSWORD,
  API_SIGNUP,
  API_UPDATEME,
  URL_API,
} from "app-constants/apiUrl.constant";
import Cookies from "js-cookie";
import {
  getDataFromApiReactRouter,
  handleErrorApiReactRouter,
} from "utils/service.util";

const loginReactRouter = async (userValue: {
  email: string;
  password: string;
}) => {
  try {
    const data = await getDataFromApiReactRouter(
      `${URL_API}${API_LOGIN}`,
      "post",
      userValue
    );
    return data;
  } catch (error) {
    return handleErrorApiReactRouter(error);
  }
};

const signupReactRouter = async (userValue: {
  email: string;
  name: string;
  passwordConfirm: string;
  password: string;
}) => {
  try {
    const data = await getDataFromApiReactRouter(
      `${URL_API}${API_SIGNUP}`,
      "post",
      userValue
    );

    return data;
  } catch (error) {
    return handleErrorApiReactRouter(error);
  }
};
const forgotPasswordReactRouter = async (userValue: { email: string }) => {
  try {
    const data = await getDataFromApiReactRouter(
      `${URL_API}${API_FORGOTPASSWORD}`,
      "post",
      userValue
    );
    return data;
  } catch (error) {
    // throw error
    return handleErrorApiReactRouter(error);
  }
};

const resetPassword = async (
  token: string,
  userValue: {
    password: string;
    passwordConfirm: string;
  }
) => {
  try {
    const data = await getDataFromApiReactRouter(
      // temporary
      `${URL_API}${API_RESETPASSWORD}/${token}`,
      "patch",
      userValue
    );
    return data;
  } catch (error) {
    return handleErrorApiReactRouter(error);
  }
};
const updateUser = async (userName: { name: string }) => {
  try {
    const data = await getDataFromApiReactRouter(
      `${URL_API}${API_UPDATEME}`,
      "patch",
      userName,
      Cookies.get(JWTKEY)
    );
    return data;
  } catch (error) {
    return handleErrorApiReactRouter(error);
  }
};
export {
  resetPassword,
  updateUser,
  signupReactRouter,
  loginReactRouter,
  forgotPasswordReactRouter,
};
