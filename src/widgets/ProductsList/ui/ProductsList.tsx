import { ProductCard } from "@/entities";
import styles from "./ProductsList.module.scss";
import { useGetProductsQuery } from "@/store/api/product.api";

const ProductsList = (): React.ReactElement => {
  const { isLoading, data } = useGetProductsQuery();

  return (
    <div className={`${styles["product-list"]}`}>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        data?.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductsList;
