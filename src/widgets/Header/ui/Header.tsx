import { CartDrawer } from "@/features";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import useDrawer from "@/widgets/ProductsList/module/useDrawer";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Header.module.scss";

const Header = (): React.ReactElement => {
  const { open, showDrawer, onClose } = useDrawer();
  const { cart } = useTypedSelector((state) => state);
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>Pet-Project</div>
        <div className={styles.header__cart}>
          <Button
            type="primary"
            onClick={() => showDrawer()}
            icon={<ShoppingOutlined />}
          >
            {cart.length > 0 && <span>{cart.length}</span>}
          </Button>
          <CartDrawer open={open} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
