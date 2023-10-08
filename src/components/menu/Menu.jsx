import styles from './menu.module.css';
import Pizzas from './components/pizza/Pizzas';


const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu_header}>
        <h3>Menu</h3>
      </div>

      <div className={styles.menu_options}>
        <button>Pizza</button>
        <button>Drinks</button>
        <button>Salad</button>
        <button>Sauce</button>
      </div>

      <Pizzas />
    </div>
  );
}

export default Menu;
