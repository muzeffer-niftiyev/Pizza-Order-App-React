import { styles } from "./index";

const Price = ({ amount }) => {
  const deliveryPrice = 5;

  return (
    <div className={styles.price}>
      <div className={styles.price_cont}>
        <div>
          <h3>Sub-Total</h3>
          <span>$ {amount}</span>
        </div>
        <div>
          <h3>Delivery</h3>
          <span>$ {deliveryPrice}</span>
        </div>
        <div className={styles.line}></div>

        <div>
          <h2>TOTAL</h2>
          <span>$ {amount + deliveryPrice}</span>
        </div>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Price;
