import { CartForm } from "@/features";
import { EmptyCart, ProductsCartList } from "@/widgets";
import { DollarOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { ICartDrawer } from "./interfaces/ICartDrawer";
import styles from "./CartDrawer.module.scss";
import useCart from "@/shared/ui/CartDrawer/module/useCart";

const CartDrawer = ({ open, onClose }: ICartDrawer): React.ReactElement => {
  const { cart, cartResult, placeOrder, handleCoupon } = useCart();

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
                {cartResult.total}
              </div>
              <ProductsCartList />
            </div>
            <div className={styles.cart__footer}>
              <div className={styles.cart__coupon}>
                <CartForm
                  handleCoupon={handleCoupon}
                  isCoupon={cartResult.isCoupon}
                />
                {cartResult.isCoupon && (
                  <div className={`${styles["cart__coupon-info"]}`}>
                    Coupon gives you a {cartResult.coupon}% discount
                  </div>
                )}
              </div>
              <div className={styles.cart__preresult}>
                <p>{cart.length} products</p>
                <p>
                  <span>$</span>
                  {cartResult.total}
                </p>
              </div>
              <div className={styles.cart__total}>
                <p>Total</p>
                <p>
                  <span>$</span>
                  {cartResult.isCoupon
                    ? cartResult.withCoupon
                    : cartResult.total}
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
