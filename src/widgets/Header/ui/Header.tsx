import { CartDrawer } from "@/features";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import useDrawer from "@/widgets/ProductsList/module/useDrawer";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header = (): React.ReactElement => {
  const { open, showDrawer, onClose } = useDrawer();
  const { cart } = useTypedSelector((state) => state);
  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        margin: "0 auto",
        padding: "15px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          width: "85%",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Pet-Project
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => showDrawer()}
            icon={<ShoppingOutlined />}
          >
            {cart.length > 0 && (
              <span style={{ color: "#fff" }}>{cart.length}</span>
            )}
          </Button>
          <CartDrawer open={open} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
