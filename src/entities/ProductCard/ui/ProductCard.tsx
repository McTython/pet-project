import { Button, Card } from "antd";
import { IProductCard } from "./interfaces/IProductCard";
import styles from "./ProductCard.module.scss";
import useActions from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Rating } from "@/shared";

const { Meta } = Card;

const ProductCard = ({ product }: IProductCard) => {
  const { toggleCart } = useActions();
  const { cart } = useTypedSelector((state) => state);

  const isExistsInCart = cart.some((p) => p.id === product.id);

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
            <p>
              <span>{product.title}</span>
            </p>
          }
        />
        <Rating product={product} />
        <div className={`${styles["product-card__button"]}`}>
          <Button
            type="primary"
            onClick={() => toggleCart(product)}
            className={isExistsInCart ? styles.inCart : undefined}
          >
            {isExistsInCart ? "Remove from" : "Add to"} cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
