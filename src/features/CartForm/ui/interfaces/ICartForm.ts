import { ICoupon } from "@/shared/config/interfaces/ICoupon";

export interface ICartForm {
  handleCoupon: (coupon: string) => void;
  isCoupon: boolean;
  coupon: ICoupon;
}
