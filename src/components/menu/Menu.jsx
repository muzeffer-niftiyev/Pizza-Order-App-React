import styles from "./menu.module.css";
import Products from "./components/pizza/Products";
import pizzasData from "../../data/pizzasData";
import drinksData from '../../data/drinksData';
import { Route, Routes, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu_header}>
        <h3>Menu</h3>
      </div>
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

      <Routes>
        <Route index path="/" element={<Products data={pizzasData}/>} />
        <Route path="/drinks" element={<Products data={drinksData}/>} />
        <Route path="/salad" element={<Products />} />
        <Route path="/sauce" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Menu;
