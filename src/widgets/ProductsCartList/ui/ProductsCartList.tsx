import { ProductCartCard } from "@/entities";
import { useTypedSelector } from "@/shared";
import styles from "./ ProductsCartList.module.scss";

const ProductsCartList = (): React.ReactElement => {
  const { cart } = useTypedSelector((state) => state);

  return (
    <div className={`${styles["product-list"]}`}>
      {cart.map((product) => (
        <ProductCartCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCartList;
