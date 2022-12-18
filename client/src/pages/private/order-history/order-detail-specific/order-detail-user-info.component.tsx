import React from "react";
import styles from "./order-detail-specific.module.scss";

type OrderDetailUserInfoProps = {
  user: {
    name: string;
    email: string;
  };
  address: string;
  createdAt: string | Date;
};
const OrderDetailUserInfo = ({
  user,
  address,
  createdAt,
}: OrderDetailUserInfoProps) => {
  return (
    <div className={styles["order-history__user-info"]}>
      <div>
        <p className="text-bold">Địa chỉ và thông tin người nhận hàng:</p>
        <ul>
          <li data-testid="order-detail-user-name-email">
            {user.name} - {user.email}{" "}
          </li>
          <li data-testid="order-detail-user-address">
            Địa chỉ nhận hàng: {address}
          </li>
          <li data-testid="order-detail-time">
            Thời gian đặt hàng: {new Date(createdAt).toLocaleString("vi-vn")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDetailUserInfo;
