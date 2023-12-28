import { styles, Links, MenuRouter } from "./index";

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
