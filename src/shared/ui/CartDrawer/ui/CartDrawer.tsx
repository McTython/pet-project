import { CartForm } from "@/features";
import { EmptyCart, ProductsCartList } from "@/widgets";
import { DollarOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { ICartDrawer } from "./interfaces/ICartDrawer";
import styles from "./CartDrawer.module.scss";
import useCart from "@/shared/ui/CartDrawer/module/useCart";

const CartDrawer = ({ open, onClose }: ICartDrawer): React.ReactElement => {
  const { cart, handleCoupon, placeOrder } = useCart();

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
        {cart.products.length ? (
          <>
            <div className={styles.cart__body}>
              <div className={styles.cart__info}>
                {cart.products.length} products for <span>$</span>
                {cart.totalAmounts}
              </div>
              <ProductsCartList />
            </div>
            <div className={styles.cart__footer}>
              <div className={styles.cart__coupon}>
                <CartForm
                  handleCoupon={handleCoupon}
                  isCoupon={cart.isCoupon}
                  coupon={cart.coupon}
                />
                {cart.isCoupon && (
                  <div className={`${styles["cart__coupon-info"]}`}>
                    Coupon gives you a {cart.coupon.discount}% discount
                  </div>
                )}
              </div>
              <div className={styles.cart__preresult}>
                <p>{cart.products.length} products</p>
                <p>
                  <span>$</span>
                  {cart.totalAmounts}
                </p>
              </div>
              <div className={styles.cart__total}>
                <p>Total</p>
                <p>
                  <span>$</span>
                  {cart.isCoupon
                    ? cart.totalAmountsWithCoupon
                    : cart.totalAmounts}
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
