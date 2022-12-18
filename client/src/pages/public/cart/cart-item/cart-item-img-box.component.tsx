import { Link } from "react-router-dom";

import styles from "./cart-item.module.scss";
type CartItemImgBoxProps = {
  link: string;
  currentColorImgCover: string;
  removeItem: () => void;
};
const CartItemImgBox = ({
  link,
  currentColorImgCover,
  removeItem,
}: CartItemImgBoxProps) => {
  return (
    <div className={`${styles["cart-item__img-box"]} flex-vt-ct gap-12px`}>
      <Link to={link}>
        <img
          height={65}
          width={65}
          data-testid="cart-item-img-cover"
          className={styles["cart-item__img"]}
          src={currentColorImgCover}
          alt="Product"
        />
      </Link>
      <button onClick={removeItem} className={styles["cart-item__btn-remove"]}>
        &times;
      </button>
    </div>
  );
};

export default CartItemImgBox;
