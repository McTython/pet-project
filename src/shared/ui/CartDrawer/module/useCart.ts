import { useEffect } from "react";
import useTypedSelector from "@/shared/module/useTypedSelector";
import useActions from "@/shared/module/useActions";

const useCart = () => {
  const { cart } = useTypedSelector((state) => state);
  const { getCartTotal, handleCoupon, placeOrder } = useActions();

  useEffect(() => {
    getCartTotal();
  }, [
    useTypedSelector((state) => state.cart.products),
    useTypedSelector((state) => state.cart.coupon.discount),
  ]);

  return {
    cart,
    handleCoupon,
    placeOrder,
  };
};

export default useCart;
