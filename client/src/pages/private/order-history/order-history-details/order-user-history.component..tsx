import Price from "components/price/price.component";
import styles from "./order-user-history.module.scss";
import { useAuth } from "context/auth.context";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getUserBookings } from "service/booking.service";
import useOrderUserHistoryHook from "./order-user-history.hook";
import { MdRemoveShoppingCart } from "react-icons/md";

import { IUserBooking } from "../order-history.interface";
import Cookies from "js-cookie";
import { JWTKEY } from "app-constants/browser.constatnt";
import UserHistoryListPurchased from "./order-history-user-list-purchased/order-history-user-list-purchased";
const OrderUserHistory = () => {
  const user = useAuth()?.user;
  const navigate = useNavigate();
  const bookings = useLoaderData() as IUserBooking[];
  const error = useOrderUserHistoryHook(bookings);
  if (!user || error || !Cookies.get(JWTKEY)) return null;
  if (!bookings.length || !bookings)
    return (
      <div
        className={`${styles["order-history__nothing"]} gap-12px flex-both-ct`}
      >
        <MdRemoveShoppingCart />
        <p data-testid="no-purchase">Bạn chưa mua sản phẩm nào</p>

        <button className="btn--border-blue" onClick={() => navigate("/")}>
          Về trang chủ
        </button>
      </div>
    );

  return (
    <>
      <h3>Tất cả đơn hàng đã mua</h3>
      <div className={styles["order-history__category"]}>
        <div>Đơn hàng</div>
        <div>Sản Phẩm</div>
        <div>Giá</div>
        <div>Ngày mua</div>
      </div>

      <UserHistoryListPurchased bookings={bookings} />
    </>
  );
};

export default OrderUserHistory;

export const loader = async () => {
  try {
    // No jwt no login
    if (!Cookies.get(JWTKEY)) return null;
    const data = await getUserBookings();
    return data;
  } catch (error) {
    return error;
  }
};
