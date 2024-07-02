import { Button, Card } from "antd";
import { IProductCard } from "./interfaces/IProductCard";
import styles from "./ProductCard.module.scss";
import { StarFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { IProduct } from "@/shared/config/interfaces/IProduct";
import useActions from "@/hooks/useActions";

const { Meta } = Card;

const ProductCard = ({ product }: IProductCard) => {
  const { cart } = useSelector((state) => state);

  const { toggleCart } = useActions();

  const isExists = cart.some((p: IProduct) => p.id === product.id);

  return (
    <Card
      hoverable
      className={`${styles["product-card"]}`}
      styles={{ body: { padding: "0px 10px 10px 10px" } }}
      cover={
        <img src={product.image} height={200} style={{ padding: "10px" }} />
      }
    >
      <div className={`${styles["product-card__wrapper"]}`}>
        <div className={`${styles["product-card__price"]}`}>
          <p>
            <span>$</span>
            <span>{product.price}</span>
          </p>
        </div>
        <Meta title={product.title} />
        <div className={`${styles["product-card__rating"]}`}>
          <p>
            <span>
              <StarFilled
                style={{
                  color:
                    product.rating.rate < 4
                      ? "#ff0000"
                      : product.rating.rate < 7
                        ? "#ff8a00"
                        : "#ffac00",
                }}
              />
            </span>
            <span className={`${styles["product-card__rating-rate"]}`}>
              {product.rating.rate}
            </span>
            <span className={`${styles["product-card__rating-count"]}`}>
              {product.rating.count} ratings
            </span>
          </p>
        </div>
        <div className={`${styles["product-card__button"]}`}>
          <Button
            type="primary"
            onClick={() => toggleCart(product)}
            className={isExists ? styles.inCart : undefined}
          >
            {isExists ? "Remove from" : "Add to"} cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
