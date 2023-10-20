import pizzasData from "../../../../data/pizzasData";
import styles from "./pizzas.module.css";
import likedIcon from "../../../../assets/icons/header-liked-count-icon.svg";

const Pizzas = () => {
  return (
    <div className={styles.container}>
      {pizzasData.map((pizza) => {
        const ingredients = pizza.ingredients.split(",");
        const formattedIngredientsData =
          ingredients.length > 3
            ? `${ingredients.slice(0, 3).join(",")}...`
            : ingredients.join(",");
        return (
          <div key={pizza.id} className={styles.box}>
            <img src={pizza.imgUrl} alt="pizza" />
            <div className={styles.pizza_data}>
              <h4>{pizza.name}</h4>
              <p>{formattedIngredientsData}</p>

              <span>{pizza.price}</span>
            </div>
            <button className={styles.liked_btn}>
              <img src={likedIcon} alt="" />
            </button>
            <button className={styles.cart_btn}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Pizzas;
