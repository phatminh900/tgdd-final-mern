import React from "react";
import { Link } from "react-router-dom";
import styles from "../order-user-history.module.scss";
import { IUserBooking } from "../../order-history.interface";
import Price from "components/price/price.component";
interface OrderHistoryUserListPurchasedProps {
  bookings: IUserBooking[];
}
const OrderHistoryUserListPurchased = ({
  bookings,
}: OrderHistoryUserListPurchasedProps) => {
  return (
    <ul className={styles["order-history__list"]}>
      {bookings.map((booking, i) => (
        <li key={booking._id} className={styles["order-history__item"]}>
          <div className="flex-vt-ct ">#{i + 1}</div>
          <div
            className={`${styles["order-history__product-details"]} flex gap-8px`}
          >
            <img src={booking.products[0].imgCover} alt="Product " />
            <div className={`${styles["order-history__products-name"]} flex`}>
              <Link to={booking._id} className="flex">
                {booking.products[0].title + " "}

                {booking.products.length > 1 && (
                  <>
                    và
                    <span>
                      &nbsp; {booking.products.length - 1} sản phẩm khác
                    </span>
                  </>
                )}
              </Link>
              <Link className={styles["order-history__link"]} to={booking._id}>
                Xem chi tiết
              </Link>
            </div>
          </div>
          <div className={styles["order-history__order-price"]}>
            <Price price={booking.total} />
          </div>
          <div className={styles["order-history__order-date"]}>
            <p data-testid="purchased-date">
              {new Date(booking.createdAt).toLocaleDateString("vi-vn")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryUserListPurchased;
