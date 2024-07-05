import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useActions, useTypedSelector } from "@/shared";
import { EmptyCart, ProductsCartList } from "@/widgets";
import { ICartDrawer } from "./interfaces/ICartDrawer";
import styles from "./CartDrawer.module.scss";

const CartDrawer = ({ open, onClose }: ICartDrawer): React.ReactElement => {
  const [totalSum, setTotalSum] = useState(0);
  const { cart } = useTypedSelector((state) => state);
  const { placeOrder } = useActions();

  const getTotalSum = () => {
    cart.map((product) => setTotalSum((prev) => prev + product.price));
  };

  useEffect(() => {
    setTotalSum(0);
    getTotalSum();
    setTotalSum((prev) => Number(prev.toFixed(2)));
  }, [cart]);

  const handlePlaceOrder = () => {
    onClose();
    placeOrder();
    console.log(cart);
  };

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
              <Button
                type="primary"
                className={styles.cart__order}
                onClick={() => handlePlaceOrder()}
              >
                <DollarOutlined />
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
