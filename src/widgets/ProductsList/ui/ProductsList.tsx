import { ProductCard } from "@/entities";
import styles from "./ProductsList.module.scss";
import { useGetProductsQuery } from "@/store/api/product.api";

const ProductsList = (): React.ReactElement => {
  const { isLoading, data } = useGetProductsQuery();

  return (
    <section className={`${styles["product-list"]}`}>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  );
};

export default ProductsList;
