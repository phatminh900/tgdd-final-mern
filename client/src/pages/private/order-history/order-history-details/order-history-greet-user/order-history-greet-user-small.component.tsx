import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

import styles from '../../order-history.module.scss'
import { ROUTES } from "app-constants/navigation.constant";
import { IAuthContext, useAuth } from "context/auth.context";

type OrderHistoryGreetUserSmallProps = {
  user: {
    name: string;
    email: string;
  };

};
const OrderHistoryGreetUserSmall = ({
  user,
}: OrderHistoryGreetUserSmallProps) => {
  const auth=useAuth()
  const navigate = useNavigate();

  return (
    <div className={`${styles["order-history__greeting--small"]}`}>
      <div className="flex-vt-ct gap-12px">
        <p className={`${styles["order-history__info-title"]} text-bold `}>
          Thông tin cá nhân
        </p>
        <Link className="color-tertiary" to={ROUTES.PERSONAL_INFORMATION}>
          Chỉnh sửa{" "}
        </Link>
        <button
          className={`${styles["order-history__btn-logout"]} color-tertiary`}
          onClick={() => {
            auth?.removeUserHandler();
            navigate(ROUTES.HOME_PAGE);
          }}
        >
          Đăng xuất
        </button>
      </div>
      <div>
        <p data-testid="user-name" className="flex-vt-ct gap-8px">
          <IoPersonAddOutline /> {user.name}
        </p>
        <p data-testid="user-email" className="flex-vt-ct gap-8px">
          <AiOutlineMail /> {user.email}
        </p>
      </div>
    </div>
  );
};

export default OrderHistoryGreetUserSmall;
