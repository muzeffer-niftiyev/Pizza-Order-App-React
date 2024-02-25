import { NavLink } from "react-router-dom";
import styles from "./links.module.css";

const Links = () => {
  const isActiveClass = ({ isActive }) => (isActive ? `${styles.active}` : "");

  return (
    <div className={styles.menu_options}>
      <NavLink className={isActiveClass} to="/">
        Pizza
      </NavLink>
      <NavLink className={isActiveClass} to="/drinks">
        Drinks
      </NavLink>
      <NavLink className={isActiveClass} to="/salad">
        Salad
      </NavLink>
      <NavLink className={isActiveClass} to="/sauce">
        Sauce
      </NavLink>
    </div>
  );
};

export default Links;
