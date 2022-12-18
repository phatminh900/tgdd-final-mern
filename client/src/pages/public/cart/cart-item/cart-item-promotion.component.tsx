import styles from "./cart-item.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
type CartItemPromotionProps = {
  isOpenPromotionList: boolean;
  promotion: string[] | undefined;
  togglePromotionList: () => void;
};
const CartItemPromotion = ({
  isOpenPromotionList,
  promotion,
  togglePromotionList,
}: CartItemPromotionProps) => {
  return (
    <div className={`${styles["cart-item__promotion"]} `}>
      <ul
        className={`${styles["cart-item__promotion-list"]} ${
          isOpenPromotionList && styles.active
        }`}
      >
        {promotion?.map((pro) => (
          <li key={pro}>{pro}</li>
        ))}
      </ul>
      <button
        className={`${styles["cart-item__btn-promotion"]} ${
          isOpenPromotionList && styles.active
        } flex-vt-ct`}
        onClick={togglePromotionList}
      >
        {!isOpenPromotionList
          ? promotion?.length
            ? `Xem  ${promotion.length} khuyến mãi`
            : ""
          : `Thu gọn`}
        {promotion?.length ? <AiFillCaretDown /> : ""}
      </button>
    </div>
  );
};

export default CartItemPromotion;
