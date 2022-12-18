import React from "react";
import { loader as orderUserHistoryLoader } from "./order-history-details/order-user-history.component.";
import OrderDetailSpecific from "./order-detail-specific/order-detail-specific.container";
import { loader as orderDetailSpecificLoader } from "./order-detail-specific/order-detail-specific.container";
import { action as userPersonalInfoAction } from "./user-personal-information/user-personal-information.component";
import OrderUserHistory from "./order-history-details/order-user-history.component.";
import UserPersonalInformation from "./user-personal-information/user-personal-information.component";
const OrderHistory = React.lazy(() => import("./order-history.container"));
export {
  OrderHistory,
  orderUserHistoryLoader,
  userPersonalInfoAction,
  OrderUserHistory,
  orderDetailSpecificLoader,
  OrderDetailSpecific,
  UserPersonalInformation,
};
