import styles from "./menu.module.css";
import { Links, MenuRouter } from "./index";

const Menu = ({menuRef}) => {

  return (
    <div className={styles.menu_container} ref={menuRef}>
      <div className={styles.menu_header}>
        <h3>Menu</h3>
      </div>
      <Links />
      <MenuRouter />
    </div>
  );
};

export default Menu;
