import { useAppSelector } from "store/hooks.store";

const useCartState = () => {
  return useAppSelector((state) => state.cart);
};

export default useCartState;
