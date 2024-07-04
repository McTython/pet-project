import { CartDrawer } from "@/features";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import useDrawer from "@/widgets/ProductsList/module/useDrawer";
import { MoonOutlined, ShoppingOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Header.module.scss";
import useTheme from "@/hooks/useTheme";

const Header = (): React.ReactElement => {
  const { open, showDrawer, onClose } = useDrawer();
  const { cart } = useTypedSelector((state) => state);
  const { theme, toggle } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>Pet-Project</div>
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
