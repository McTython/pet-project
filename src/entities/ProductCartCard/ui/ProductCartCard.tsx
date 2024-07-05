import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Rating, useActions } from "@/shared";
import { IProductCartCard } from "./interfaces/IProductCartCard";
import styles from "./ProductCartCard.module.scss";

const ProductCartCard = ({ product }: IProductCartCard): React.ReactElement => {
  const { toggleCart } = useActions();

  return (
    <Card
      key={product.id}
      hoverable
      bordered={false}
      styles={{
        body: {
          backgroundColor: "var(--backgroundSecondary)",
          padding: 12,
          border: "1px solid var(--cardBorderColor)",
          borderRadius: 8,
        },
      }}
    >
      <div className={`${styles["product-cart"]}`}>
        <Meta
          title={
            <span className={`${styles["product-cart__title"]}`}>
              {product.title}
            </span>
          }
          description={<Rating product={product} />}
          avatar={
            <img
              src={product.image}
              className={`${styles["product-cart__image"]}`}
            />
          }
        />
        <div className={`${styles["product-cart__footer"]}`}>
          <div className={`${styles["product-cart__price"]}`}>
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
