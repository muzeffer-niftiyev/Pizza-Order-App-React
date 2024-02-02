import styles from "./cart-button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeHistory, toggleCart, cartCountIcon } from "./index";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.cartItems);

  const toggleCartHandler = () => {
    dispatch(closeHistory());
    dispatch(toggleCart());
  };

  return (
    <button onClick={toggleCartHandler}>
      <div className={styles.icon}>
        <img src={cartCountIcon} alt="" />
        <p>{cartItems.length}</p>
      </div>
      <p className={styles.desc}>Cart</p>
    </button>
  );
};

export default CartButton;
