import { Link } from "react-router-dom";
import Price from "components/price/price.component";
import styles from "./cart-item.module.scss";
import QuantityBox from "components/quantity-box/quantity-box.component";
import { ICartProductDocument } from "store/cart/cartProductDocument";
import useCartItem from "./cart-item.hook";
import CartItemColorList from "./cart-item-color-list.component";
import CartItemColorBtn from "./cart-item-color-btn.component";
import CartItemPromotion from "./cart-item-promotion.component";
import CartItemImgBox from "./cart-item-img-box.component";
interface CartItemProps extends ICartProductDocument {}
const CartItem = ({
  currentColor,
  title,
  link,
  quantity: prevQuantity,
  price,
  imgColorsCover,
  currentColorImgCover,
  colors,
  id,
  promotion,
}: CartItemProps) => {
  const {
    quantity,
    changeQuantityItem,
    isOpenPromotionList,
    isOpenColorList,
    changeCurrentColor,
    togglePromotionList,
    removeItem,
    toggleColorList,
  } = useCartItem(id, prevQuantity);

  return (
    <li data-testid={`cart-item-container-${id}`} className={styles["cart-item"]}>
      <div className={styles["cart-item__left"]}>
        <div className={`${styles["cart-item__info"]} flex`}>
          <CartItemImgBox
            removeItem={removeItem}
            link={link}
            currentColorImgCover={currentColorImgCover}
          />
          <div>
            <Link to={link}>
              <h4>{title}</h4>
            </Link>
            <CartItemPromotion
              togglePromotionList={togglePromotionList}
              promotion={promotion}
              isOpenPromotionList={isOpenPromotionList}
            />
            <div className={styles["cart-item__colors"]}>
              <CartItemColorBtn
                toggleColorList={toggleColorList}
                currentColor={currentColor}
              />
              <CartItemColorList
                isOpenColorList={isOpenColorList}
                colors={colors}
                currentColor={currentColor}
                changeCurrentColor={changeCurrentColor}
                imgColorsCover={imgColorsCover}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["cart-item__right"]}>
        <Price price={price} />
        <QuantityBox
          quantity={quantity}
          changeQuantityItem={changeQuantityItem}
        />
      </div>
    </li>
  );
};

export default CartItem;
