import { Button } from "antd";
import { useForm } from "react-hook-form";
import { ICartForm } from "./interfaces/ICartForm";
import styles from "./CartForm.module.scss";

const CartForm = ({
  handleCoupon,
  isCoupon,
}: ICartForm): React.ReactElement => {
  const { handleSubmit, register } = useForm<{ coupon: string }>();

  const onSubmit = (data: { coupon: string }) => {
    handleCoupon(data.coupon);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles["cart__coupon-input"]}`}
    >
      <input placeholder={"Coupon"} {...register("coupon")} />
      <Button
        type="primary"
        className={isCoupon ? styles.cancelCoupon : undefined}
        htmlType="submit"
      >
        {isCoupon ? "Cancel" : "Send"}
      </Button>
    </form>
  );
};

export default CartForm;
