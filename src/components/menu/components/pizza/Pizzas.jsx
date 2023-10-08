import pizzasData from '../../../../data/pizzasData';
import styles from './pizzas.module.css';

const Pizzas = () => {
    return (
        <div className={styles.container}>
            {pizzasData.map((pizza) => {
                return (
                  <div key={pizza.id} className={styles.box}>
                    <img src={pizza.imgUrl} alt="pizza" />
                    <div className={styles.pizza_data}>
                      <h4>{pizza.name}</h4>
                      <p>{pizza.ingredients}</p>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default Pizzas;