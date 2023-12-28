import { styles, decreaseBalance, clearCart, addOrderToHistory } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../../../features/cart-items-slice/cart-items-slice";

const Price = ({ amount, setOrderStatus }) => {
  const orderedItems = useSelector((state) => state.cartItem.cartItems);
  //const orderHistory = useSelector((state) => state.orderHistory.orderHistory);
  const deliveryPrice = 5; // helelik sabit value'di user seciminden asili olaraq hesablanacaq qiymet
  const dispatch = useDispatch();
  const balance = localStorage.getItem("balance");

  const orderBtnHandler = () => {
    if (balance < amount + deliveryPrice) {
      setOrderStatus("error");
      dispatch(closeCart())
    } else {
      dispatch(decreaseBalance(amount + deliveryPrice));
      dispatch(clearCart());
      dispatch(closeCart());
      setOrderStatus("success");
      dispatch(addOrderToHistory(orderedItems));
    }
  };

  return (
    <>
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
    </>
  );
};

export default Price;
