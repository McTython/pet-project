import { Button, Card } from "antd";
import { IProductCartCard } from "./interfaces/IProductCartCard";
import Meta from "antd/es/card/Meta";
import { Rating } from "@/shared";
import useActions from "@/hooks/useActions";

const ProductCartCard = ({ product }: IProductCartCard): React.ReactElement => {
  const { toggleCart } = useActions();

  return (
    <Card key={product.id} hoverable styles={{ body: { padding: 12 } }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Meta
          title={<span>{product.title}</span>}
          description={<Rating product={product} />}
          avatar={
            <img
              src={product.image}
              style={{
                width: 70,
                objectFit: "contain",
                maxHeight: "70px",
              }}
            />
          }
        />
        <div style={{ borderTop: "1px solid rgb(226, 226, 233)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <div>
              <span>$</span>
              {product.price}
            </div>
            <div>
              <Button type="primary" onClick={() => toggleCart(product)}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCartCard;
