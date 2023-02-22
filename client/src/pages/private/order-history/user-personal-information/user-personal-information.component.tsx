import { useEffect } from "react";
import {
  Form,
  LoaderFunctionArgs,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./user-personal-information.module.scss";
import { ROUTES } from "app-constants/navigation.constant";
import { Button, Input } from "components";
import { useAuth } from "context/auth.context";

import { updateUser } from "service/user.service";
import useUserPersonalInformation from "./user-personal-information.hook";
import {
  ResponseStatusData,
  ResponseStatusMessage,
} from "interfaces/response.interface";
import { IUserAccount } from "../order-history.interface";

import { JWTKEY } from "app-constants/browser.constatnt";
import { BsCheckCircle } from "react-icons/bs";

const UserPersonalInformation = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const userPersonalInfoValue = useActionData() as
    | ResponseStatusData<IUserAccount>
    | ResponseStatusMessage;
  const error = useUserPersonalInformation(userPersonalInfoValue);
  const { pathname } = useLocation();
  const user = useAuth()?.user;

  if (!user || !Cookies.get(JWTKEY)) {
    return null;
  }
  const text = navigation.state === "submitting" ? "Submitting..." : "Cập nhật";
  const isSuccess =
    userPersonalInfoValue && userPersonalInfoValue.status === "success";
  const isLoading = navigation.state === "submitting";
  useEffect(() => {
    if (!user || !Cookies.get(JWTKEY)) {
      navigate(ROUTES.LOGIN);
    }
  }, []);
  return (
    <>
      <h3>Thông tin cá nhân</h3>
      <Form
        method="patch"
        action={pathname}
        className={`${styles["user-personal-info__form"]} grid-2-cols`}
      >
        <Input value={user.name} label="Name" id="user-name" type="text" />
        <Input
          disable={true}
          value={user.email}
          label="Email"
          id="user-email"
          type="email"
        />{" "}
        {error && (
          <p
            className={`${styles["user-personal-info__error"]} text-center error`}
          >
            {error}
          </p>
        )}
        <Button btnType="secondary">
          {!isSuccess && !isLoading && text}
          {isLoading && text}
          {isSuccess && <BsCheckCircle />}
        </Button>
   
      </Form>
    </>
  );
};

export default UserPersonalInformation;
export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const userName = { name: formData.get("name")! as string };
  try {
    const data = await updateUser(userName);
    return data;
  } catch (error) {
    return error;
  }
};
