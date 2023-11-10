import { styles, useLocation, Links, Router } from "./index";

const Menu = () => {
  const location = useLocation();
  const key = location.pathname;

  return (
    <div className={styles.menu_container}>
      <div className={styles.menu_header}>
        <h3>Menu</h3>
      </div>
      <Links />
      <Router key={key} />
    </div>
  );
};

export default Menu;
