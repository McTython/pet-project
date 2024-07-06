import { useEffect, useState } from "react";
import { mockCoupon } from "@/shared/config/mockCoupon";
import useTypedSelector from "@/shared/module/useTypedSelector";
import useActions from "@/shared/module/useActions";

interface ICartResult {
  total: number;
  coupon: number;
  isCoupon: boolean;
  withCoupon: number;
}

const useCart = () => {
  const { cart } = useTypedSelector((state) => state);
  const { placeOrder } = useActions();
  const [cartResult, setCartResult] = useState<ICartResult>({
    total: 0,
    coupon: 0,
    isCoupon: false,
    withCoupon: 0,
  });

  useEffect(() => {
    getTotalSum();
  }, [cart]);

  useEffect(() => {
    if (cartResult.isCoupon) {
      calculateCoupon(cartResult.coupon);
    }
  }, [cart]);

  const getTotalSum = () => {
    setCartResult((prev) => ({ ...prev, total: 0 }));
    cart.map((product) =>
      setCartResult((prev) => ({
        ...prev,
        total: prev.total + product.price,
      })),
    );
    setCartResult((prev) => ({
      ...prev,
      total: Number(prev.total.toFixed(2)),
    }));
  };

  const calculateCoupon = (c: number) => {
    let calculateCoupon = c / 100;
    setCartResult((prev) => ({
      ...prev,
      withCoupon: Number(
        (prev.total - prev.total * calculateCoupon).toFixed(2),
      ),
    }));
  };

  const handleCoupon = (couponInput: string) => {
    if (!cartResult.isCoupon && couponInput) {
      let findCoupon = mockCoupon.findIndex((c) => c.text === couponInput);
      if (findCoupon !== -1) {
        setCartResult((prev) => ({
          ...prev,
          coupon: mockCoupon[findCoupon].discount,
        }));
        calculateCoupon(mockCoupon[findCoupon].discount);
        setCartResult((prev) => ({ ...prev, isCoupon: true }));
      } else {
        console.log("Coupon not found!");
        setCartResult((prev) => ({
          total: prev.total,
          coupon: 0,
          isCoupon: false,
          withCoupon: 0,
        }));
      }
    } else {
      setCartResult((prev) => ({
        total: prev.total,
        coupon: 0,
        isCoupon: false,
        withCoupon: 0,
      }));
    }
  };

  return {
    cart,
    cartResult,
    placeOrder,
    handleCoupon,
  };
};

export default useCart;
