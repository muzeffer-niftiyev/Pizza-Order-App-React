import { styles, decreaseBalance, clearCart } from "./index";
import { useDispatch } from "react-redux";

const Price = ({ amount , setIsCartOpen}) => {
  const deliveryPrice = 5; // helelik sabit value'di user seciminden asili olaraq hesablanacaq qiymet
  const dispatch = useDispatch();

  const orderBtnHandler = () => {
    dispatch(decreaseBalance(amount + deliveryPrice));
    dispatch(clearCart());
    setIsCartOpen(false);
  }

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
        <button onClick={orderBtnHandler}>Order Now</button>
      </div>
    </div>
  );
};

export default Price;
