import useCartListHook from "../cart-list/cart-list.hook";
const useCartTemporarySummary = () => {
  const cart = useCartListHook();
  const totalProducts = cart.reduce(
    (totalProduct, pro) => totalProduct + pro.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (totalProduct, pro) => totalProduct + pro.price * pro.quantity,
    0
  );
  return { totalProducts, totalPrice };
};

export default useCartTemporarySummary;
