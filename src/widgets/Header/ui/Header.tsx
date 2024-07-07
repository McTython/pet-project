import { Button } from "antd";
import { MoonOutlined, ShoppingOutlined, SunOutlined } from "@ant-design/icons";
import { useTypedSelector, CartDrawer } from "@/shared";
import styles from "./Header.module.scss";
import useDrawer from "../module/useDrawer";
import useTheme from "../module/useTheme";

const Header = (): React.ReactElement => {
  const { open, showDrawer, onClose } = useDrawer();
  const { length } = useTypedSelector((state) => state.cart.products);
  const { theme, toggle } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>Shop</div>
        <div className={styles.header__buttons}>
          <Button type="primary" onClick={() => toggle()}>
            {theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
          </Button>
          <Button
            type="primary"
            onClick={() => showDrawer()}
            icon={<ShoppingOutlined />}
          >
            {length > 0 && <span>{length}</span>}
          </Button>
          <CartDrawer open={open} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
