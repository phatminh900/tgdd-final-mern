import styles from "./order-detail-specific.module.scss";
import Price from "components/price/price.component";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getUserBooking } from "service/booking.service";
import { IUserBooking } from "../order-history.interface";
import { useAuth } from "context/auth.context";
import { ROUTES } from "app-constants/navigation.constant";
import Cookies from "js-cookie";
import { JWTKEY } from "app-constants/browser.constatnt";
import { useEffect } from "react";
import OrderDetailUserInfo from "./order-detail-user-info.component";
import OrderDetailTotal from "./order-detail-total.component";
import OrderDetailProductInfo from "./order-detail-product-info.component";

const OrderDetailSpecific = () => {
  const booking = useLoaderData() as IUserBooking;
  const navigate = useNavigate();
  const user = useAuth()?.user;
  const params = useParams();
  if (!user || !Cookies.get(JWTKEY)) {
    return null;
  }
  useEffect(() => {
    if (!user || !Cookies.get(JWTKEY)) {
      navigate(ROUTES.LOGIN);
    }
  }, []);
  return (
    <div className={styles["order-history__specific"]}>
      <h3 className={styles["order-history__order-name"]}>
        Chi tiết đơn hàng #{params.id}
      </h3>
      <ul className={styles["order-history__product-list"]}>
        {booking.products.map((product) => (
          <OrderDetailProductInfo
            key={product.currentColor + product.title}
            category={product.category}
            slug={product.slug}
            imgSrc={product.imgCover}
            currentColor={product.currentColor}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
          />
        ))}
      </ul>
      <OrderDetailTotal total={booking.total} />
      <OrderDetailUserInfo
        createdAt={booking.createdAt}
        user={user}
        address={booking.userAddress}
      />
      <div className={`${styles["order-history__navigate-back"]} flex-both-ct`}>
        <button
          onClick={() => navigate(ROUTES.ORDER_HISTORY)}
          className="btn--blue"
        >
          Quay trờ lại danh sách đơn hàng
        </button>
      </div>
    </div>
  );
};

export default OrderDetailSpecific;
export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!Cookies.get(JWTKEY)) return;
  return getUserBooking(params.id as string);
};
