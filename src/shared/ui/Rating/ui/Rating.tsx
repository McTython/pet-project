import { IProduct } from "@/shared/config/interfaces/IProduct";
import { StarFilled } from "@ant-design/icons";
import styles from "./Rating.module.scss";

interface IRatingComponent {
  product: IProduct;
}

const Rating = ({ product }: IRatingComponent): React.ReactElement => {
  return (
    <div>
      <p className={styles.rating}>
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
        <span className={styles.rating__rate}>{product.rating.rate}</span>
        <span className={styles.rating__count}>
          {product.rating.count} ratings
        </span>
      </p>
    </div>
  );
};

export default Rating;
