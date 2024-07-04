import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button, Drawer } from "antd";
import { ICartDrawer } from "./interfaces/ICartDrawer";
import { useEffect, useState } from "react";
import styles from "./CartDrawer.module.scss";
import { EmptyCart, ProductsCartList } from "@/widgets";

const CartDrawer = ({ open, onClose }: ICartDrawer): React.ReactElement => {
  const { cart } = useTypedSelector((state) => state);

  const getTotalSum = () => {
    cart.map((product) => setTotalSum((prev) => prev + product.price));
  };

  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    setTotalSum(0);
    getTotalSum();
    setTotalSum((prev) => Number(prev.toFixed(2)));
  }, [cart]);

  return (
    <Drawer
      title={"Shopping Cart"}
      onClose={onClose}
      open={open}
      width={480}
      styles={{
        header: {
          color: "var(--textPrimary)",
          backgroundColor: "var(--backgroundSecondary)",
        },
        body: {
          padding: 0,
          backgroundColor: "var(--backgroundPrimary)",
        },
      }}
    >
      <div className={styles.cart}>
        {cart.length ? (
          <>
            <div className={styles.cart__body}>
              <div className={styles.cart__info}>
                {cart.length} products for <span>$</span>
                {totalSum}
              </div>
              <ProductsCartList />
            </div>
            <div className={styles.cart__footer}>
              <div className={styles.cart__coupon}>
                <input placeholder={"Coupon"} />
              </div>
              <div className={styles.cart__preresult}>
                <p>{cart.length} products</p>
                <p>
                  <span>$</span>
                  {totalSum}
                </p>
              </div>
              <div className={styles.cart__total}>
                <p>Total</p>
                <p>
                  <span>$</span>
                  {totalSum}
                </p>
              </div>
              <Button type="primary" className={styles.cart__order}>
                Place Order
              </Button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
