import { NavLink } from "react-router-dom";
import styles from "./links.module.css";

const Links = () => {
  return (
    <div className={styles.menu_options}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="/"
      >
        Pizza
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="/drinks"
      >
        Drinks
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="/salad"
      >
        Salad
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="/sauce"
      >
        Sauce
      </NavLink>
    </div>
  );
};

export default Links;
