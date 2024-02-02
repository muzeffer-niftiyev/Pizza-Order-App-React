import { Links, MenuRouter } from "./index";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu_header}>
        <h3>Menu</h3>
      </div>
      <Links />
      <MenuRouter />
    </div>
  );
};

export default Menu;
