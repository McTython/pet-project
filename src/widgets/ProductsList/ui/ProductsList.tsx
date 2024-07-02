import { ProductCard } from "@/entities";
import useGetProducts from "@/shared/module/useGetProducts";
import styles from "./ProductsList.module.scss";

const ProductsList = (): React.ReactElement => {
  const { products } = useGetProducts();

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
