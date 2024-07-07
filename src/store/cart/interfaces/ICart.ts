import { ICoupon } from "@/shared/config/interfaces/ICoupon";
import { IProduct } from "@/shared/config/interfaces/IProduct";

export interface ICart {
  products: IProduct[];
  totalAmounts: number;
  totalAmountsWithCoupon: number;
  isCoupon: boolean;
  coupon: ICoupon;
}
