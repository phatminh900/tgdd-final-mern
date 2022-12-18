import CartItemColorItem from "./cart-item-color-item.component";
import styles from "./cart-item.module.scss";
type CartItemColorListProps = {
  isOpenColorList: boolean;
  imgColorsCover: string[];
  changeCurrentColor: (color: string) => void;
  currentColor: string;
  colors: string[];
};
const CartItemColorList = ({
  isOpenColorList,
  imgColorsCover,
  changeCurrentColor,
  currentColor,
  colors,
}: CartItemColorListProps) => {
  return (
    <ul
    data-testid='cart-item-color-list'
      className={`${styles["cart-item__colors-list"]} ${
        isOpenColorList && styles.active
      }`}
    >
      {imgColorsCover.map((img, i) => (
        <CartItemColorItem
          key={img}
  
          color={colors[i]}
          imgSrc={img}
          changeCurrentColor={changeCurrentColor}
          currentProductColor={currentColor}
        />
      ))}
    </ul>
  );
};

export default CartItemColorList;
