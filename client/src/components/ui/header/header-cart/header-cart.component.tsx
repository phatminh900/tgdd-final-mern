import { ROUTES } from "app-constants/navigation.constant";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

import styles from "./header-cart.module.scss";
import useHeaderCart from "./header-cart.hook";

const HeaderCart = () => {
  const { cartProductsLength } = useHeaderCart();
  return (
    <div
      className={`${styles.cart} cart-section flex-vt-ct   ${styles.action}`}
    >
      <Link to={ROUTES.CART} className="flex-both-ct">
        <p
          data-product-length={cartProductsLength}
          className={styles["cart-box"]}
        >
          <BiCart />
        </p>
        <span>Giỏ hàng</span>
      </Link>
    </div>
  );
};

export default HeaderCart;
