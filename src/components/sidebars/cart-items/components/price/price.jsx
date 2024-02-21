import styles from "./price.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  clearCart,
  decreaseBalance,
  addOrderToHistory,
} from "../../index";


const Price = ({ amount, setOrderStatus }) => {
  const deliveryPrice = 5;
  const orderedItems = useSelector((state) => state.cartItem.cartItems);
  const dispatch = useDispatch();
  const balance = localStorage.getItem("balance");
  
  const getOrderDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");

    return `${day}.${month}.${year}, ${hour}:${minute}`;
  };

  const orderBtnHandler = () => {
    if (balance < amount + deliveryPrice) {
      setOrderStatus("error");
      dispatch(closeCart());
    } else {
      dispatch(decreaseBalance(amount + deliveryPrice));
      dispatch(clearCart());
      dispatch(closeCart());
      setOrderStatus("success");

      if (!orderedItems) return;
      dispatch(
        addOrderToHistory({
          date: getOrderDate(),
          totalPrice: amount + deliveryPrice,
          items: [...orderedItems],
          id: new Date().getTime(),
        })
      );
    }
  };

  return (
    <div className={styles.price}>
      <div className={styles.price_cont}>
        <div>
          <h3>Sub-Total</h3>
          <span>${amount}</span>
        </div>
        <div>
          <h3>Delivery</h3>
          <span>${deliveryPrice}</span>
        </div>
        <div className={styles.line}></div>

        <div>
          <h2>TOTAL</h2>
          <span>${amount + deliveryPrice}</span>
        </div>
        <button onClick={orderBtnHandler}>Order Now</button>
      </div>
    </div>
  );
};

export default Price;
