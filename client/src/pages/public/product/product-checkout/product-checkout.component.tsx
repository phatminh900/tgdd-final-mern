import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./product-checkout.module.scss";
import formatCurrency from "utils/formatCurrency";
import { Link, useLocation } from "react-router-dom";
import { ICartProductDocument } from "store/cart/cartProductDocument";
import QuantityBox from "components/quantity-box/quantity-box.component";
import ProductCheckoutListColor from "./product-checkout-list-color/product-checkout-list-color.component";
import { IProductType } from "interfaces/allProductsType.interface";
import { Button } from "components";
interface ProductCheckoutProps  {
  currentColor: string;
  onToggleModal: () => void;
  onChangeCurrentColor: (color: string) => void;
  id: string;
  title: string;
  promotion: string[];
  colors: string[];
  imgColorsCover: string[];
  price: number;
  addToCart: (product: ICartProductDocument) => void;
}
const ProductCheckout = ({
  onToggleModal,
  title,
  id,
  promotion,
  imgColorsCover,
  colors,
  price,
  addToCart,
  onChangeCurrentColor,
  currentColor,
}: ProductCheckoutProps) => {
  const { pathname } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  const [isOpenPromotionBox, setIsOpenPromotionBox] = useState(false);
  const addProductToCartHandler = () => {
    const discount = [{ code: "NEW_JOB", discount: 10 }];
    const product = {
      title,
      id,
      price,
      currentColor,
      discount,
      promotion,
      link: pathname,
      colors,
      imgColorsCover,
      quantity: quantity,
      currentColorImgCover: imgColorsCover[colors.indexOf(currentColor)],
    };
    addToCart(product);
  };
  return (
    <>
      <div className={`${styles["product-checkout"]} center-both-absolute`}>
        <div className={styles["product-checkout__header"]}>
          <p>{title}</p>
          <p className={styles["product-checkout__price"]}>
            {formatCurrency(price)}₫
          </p>
          <button
            onClick={() => onToggleModal()}
            className={styles["product-checkout__btn-close"]}
          >
            &times;
          </button>
        </div>
        <div className={styles["product-checkout__body"]}>
          <p
            className={`${styles["product-checkout__notification"]} text-bold`}
          >
            Chọn màu:
          </p>
          <ProductCheckoutListColor
            onChangeCurrentColor={onChangeCurrentColor}
            currentColor={currentColor}
            colors={colors}
            imgColorsCover={imgColorsCover}
          />
          <div
            className={`${styles["product-checkout__quantity-box"]} flex-vt-ct`}
          >
            <p className="text-bold">Chọn số lượng:</p>
            <QuantityBox
              quantity={quantity}
              changeQuantityItem={changeQuantity}
            />
          </div>
          <div
            className={`${styles["product-checkout__promotion"]} ${
              isOpenPromotionBox ? styles.active : ""
            }`}
          >
            <ul className={styles["product-checkout__promotion-list"]}>
              {promotion.map((promo) => (
                <li key={uuidv4()}>{promo}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpenPromotionBox((prev) => !prev)}
              className={` ${styles["product-checkout__open-promotion"]} gap-8px flex-vt-ct`}
            >
              {!isOpenPromotionBox ? "Xem tất cả khuyến mãi" : "Thu gọn"}{" "}
              <AiFillCaretDown />
            </button>
            <Button
              onClick={addProductToCartHandler}
              className="w-100"
              btnType="primary"
            >
              Thêm vào giỏ hàng
            </Button>

            <Link
              target="_blank"
              to="/cart"
              className={`${styles["product-checkout__see-cart"]} text-center color-tertiary`}
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckout;
