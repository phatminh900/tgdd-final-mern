import { Outlet } from "react-router-dom";
import OrderHistoryNavigate from "./order-history-details/order-history-navigate/order-history-navigate.component";

import styles from "./order-history.module.scss";

import OrderHistoryGreetUser from "./order-history-details/order-history-greet-user/order-history-greet-user.component";
import OrderHistoryGreetUserSmall from "./order-history-details/order-history-greet-user/order-history-greet-user-small.component";
import useOrderHistoryHook from "./order-history.hook";
import { useAuth } from "context/auth.context";
const OrderHistory = () => {
  const auth = useAuth();
  const user = useOrderHistoryHook(auth);

  // error means can't get bookings
  if (!user) return null;
  return (
    <section
      data-testid="order-history-container"
      className={styles["order-history"]}
    >
      <OrderHistoryNavigate />
      <div>
        <OrderHistoryGreetUser user={user} />
        <OrderHistoryGreetUserSmall user={user}  />
        <div className={styles["order-history__list-box"]}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
