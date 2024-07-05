import { Button } from "antd";
import { MoonOutlined, ShoppingOutlined, SunOutlined } from "@ant-design/icons";
import { useTypedSelector, CartDrawer } from "@/shared";
import useDrawer from "@/widgets/Header/module/useDrawer";
import useTheme from "@/widgets/Header/module/useTheme";
import styles from "./Header.module.scss";

const Header = (): React.ReactElement => {
  const { open, showDrawer, onClose } = useDrawer();
  const { cart } = useTypedSelector((state) => state);
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
            {cart.length > 0 && <span>{cart.length}</span>}
          </Button>
          <CartDrawer open={open} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default Header;
