import { Input } from "components";
import styles from "./cart-user-info.module.scss";
import useCartUserInfo from "./cart-user-info.hook";
const CartUserInfo = () => {
  const { user, address, setUserAddress, appState } = useCartUserInfo();
  // @ts-ignore
  if (!user) return null;

  return (
    <div className={styles["cart__user-info"]}>
      <p>Thông tin khách hàng</p>
      <form
        data-error-msg={appState.error}
        className={`${styles["cart__form"]} gap-12px`}
      >
        <>
          <Input
            type="text"
            label="name"
            id="user-name"
            value={user.name!}
            className={` ${
              appState.error && !user.name && styles["cart__input-error"]
            }`}
          />
          <Input
            className={`${styles["cart__user-email-input"]} ${
              appState.error && !user.email && styles["cart__input-error"]
            }`}
            disable={true}
            value={user.email}
            label="Email"
            id="user-login-email"
            type="email"
          />
        </>

        <Input
          onChange={setUserAddress}
          className={
            appState.error && !address ? styles["cart__input-error"] : ""
          }
          label="Address"
          id="address"
          value={address}
          type="text"
        />
      </form>
    </div>
  );
};

export default CartUserInfo;
