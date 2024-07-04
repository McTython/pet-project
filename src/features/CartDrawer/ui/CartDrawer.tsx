import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button, Drawer, Input } from "antd";
import { ICartDrawer } from "./interfaces/ICartDrawer";
import { useEffect, useState } from "react";
import styles from "./CartDrawer.module.scss";
import { ProductsCartList } from "@/widgets";
import { setUncaughtExceptionCaptureCallback } from "process";

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
        body: {
          padding: 0,
          background: "#f1f1f1",
        },
      }}
    >
      <div className={styles.cart}>
        {cart.length ? (
          <>
            <div className={styles.cart__body}>
              <div className={styles.cart__result}>
                {cart.length} products for <span>$</span>
                {totalSum}
              </div>
              <ProductsCartList />
            </div>
            <div className={styles.cart__footer}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div className={styles.cart__coupon}>
                  <input placeholder={"Coupon"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingTop: 10,
                    borderTop: "1px solid rgb(226, 226, 233)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    <p>{cart.length} products</p>
                    <p>
                      <span>$</span>
                      {totalSum}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 600,
                      fontSize: 16,
                      paddingTop: 10,
                      borderTop: "1px solid rgb(226, 226, 233)",
                    }}
                  >
                    <p>Total</p>
                    <p>
                      <span>$</span>
                      {totalSum}
                    </p>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        padding: "18px 54px",
                        fontSize: 16,
                        borderRadius: 20,
                      }}
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              margin: "auto",
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Cart is Empty
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
