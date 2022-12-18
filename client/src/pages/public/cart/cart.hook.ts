import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useAppDispatch } from "store/hooks.store";
import { appStateActions } from "store/appState/app-state-slice";
import { JWTKEY } from "app-constants/browser.constatnt";
import { useAuth } from "context/auth.context";
import useCartState from "store/cart/cart-slice.hook";
const useCartHook = () => {
  const cart = useCartState().cart;
  const user = useAuth()?.user;
  const cartState = useCartState();
  const dispatch = useAppDispatch();

  const { discount, userAddress } = cartState;
  const userId = user ? user._id : null;
  const checkout = async () => {
    try {
      if (!userAddress)
        return dispatch(
          appStateActions.setError(`Please fill up all the fields.`)
        );
      const { data } = await axios.post(
        "/api/v1/booking/create-checkout-session",
        {
          cart,
          discount,
          userAddress,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(JWTKEY)}`,
          },
        }
      );
      // dispatch(cartState.userAddress)
      dispatch(appStateActions.resetState());
      window.location.href = data.session.url;
    } catch (error) {
      const err = error as AxiosError<{ status: string; message: string }>;
      const { response } = err;
      const errMsg = response?.data.message || "something went wrong";
      dispatch(appStateActions.setError(errMsg));
    }
  };

  return { cart, checkout };
};

export default useCartHook;
