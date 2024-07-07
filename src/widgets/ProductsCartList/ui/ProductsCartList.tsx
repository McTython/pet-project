import { ProductCartCard } from "@/entities";
import { useTypedSelector } from "@/shared";
import styles from "./ ProductsCartList.module.scss";

const ProductsCartList = (): React.ReactElement => {
  const { cart } = useTypedSelector((state) => state);

  return (
    <section className={`${styles["product-list"]}`}>
      {cart.products.map((product) => (
        <ProductCartCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsCartList;
