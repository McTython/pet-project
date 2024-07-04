import { ProductCartCard } from "@/entities";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const ProductsCartList = (): React.ReactElement => {
  const { cart } = useTypedSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: 15,
      }}
    >
      {cart.map((product) => (
        <ProductCartCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCartList;
