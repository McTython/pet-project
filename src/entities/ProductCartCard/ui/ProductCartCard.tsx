import { Button, Card } from "antd";
import { IProductCartCard } from "./interfaces/IProductCartCard";
import Meta from "antd/es/card/Meta";
import { Rating } from "@/shared";
import useActions from "@/hooks/useActions";
import styles from "./ProductCartCard.module.scss";

const ProductCartCard = ({ product }: IProductCartCard): React.ReactElement => {
  const { toggleCart } = useActions();

  return (
    <Card key={product.id} hoverable styles={{ body: { padding: 12 } }}>
      <div className={`${styles["product-cart"]}`}>
        <Meta
          title={<p>{product.title}</p>}
          description={<Rating product={product} />}
          avatar={
            <img
              src={product.image}
              className={`${styles["product-cart__image"]}`}
            />
          }
        />
        <div className={`${styles["product-cart__footer"]}`}>
          <div>
            <span>$</span>
            {product.price}
          </div>
          <Button type="primary" onClick={() => toggleCart(product)}>
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCartCard;
