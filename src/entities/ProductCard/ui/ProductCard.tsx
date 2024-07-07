import { Button, Card } from "antd";
import { ShoppingFilled } from "@ant-design/icons";
import { Rating, useTypedSelector, useActions } from "@/shared";
import { IProductCard } from "./interfaces/IProductCard";
import styles from "./ProductCard.module.scss";

const { Meta } = Card;

const ProductCard = ({ product }: IProductCard) => {
  const { toggleCart } = useActions();
  const { products } = useTypedSelector((state) => state.cart);

  const isExistsInCart = products.some((p) => p.id === product.id);

  return (
    <Card
      hoverable
      className={`${styles["product-card"]}`}
      styles={{ body: { padding: "0px 10px 10px 10px" } }}
      cover={
        <img
          src={product.image}
          height={200}
          className={`${styles["product-card__image"]}`}
        />
      }
    >
      <div className={`${styles["product-card__info"]}`}>
        <div className={`${styles["product-card__price"]}`}>
          <p>
            <span>$</span>
            <span>{product.price}</span>
          </p>
        </div>
        <Meta
          title={
            <span className={`${styles["product-card__title"]}`}>
              {product.title}
            </span>
          }
        />
        <Rating product={product} />
        <div className={`${styles["product-card__button"]}`}>
          <Button
            type="primary"
            onClick={() => toggleCart(product)}
            className={isExistsInCart ? styles.inCart : undefined}
            htmlType="button"
          >
            <ShoppingFilled />
            {isExistsInCart ? "Remove from" : "Add to"} cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
