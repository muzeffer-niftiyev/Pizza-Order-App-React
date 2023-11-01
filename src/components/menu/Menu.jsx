import styles from "./menu.module.css";
import Products from "./components/products";
import pizzasData from "../../data/pizzas-data";
import drinksData from "../../data/drinks-data";
import saladsData from "../../data/salads-data";
import saucesData from "../../data/sauces-data";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const key = location.pathname;

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
        <Route
          index
          path="/"
          element={<Products key={key} data={pizzasData} />}
        />
        <Route
          path="/drinks"
          element={<Products key={key} data={drinksData} />}
        />
        <Route
          path="/salad"
          element={<Products key={key} data={saladsData} />}
        />
        <Route
          path="/sauce"
          element={<Products key={key} data={saucesData} />}
        />
      </Routes>
    </div>
  );
};

export default Menu;
