import { useDispatch } from "react-redux";
import styles from "./cart-item-data.module.css";
import {
  trashIcon,
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../../index";

const CartItemData = ({ product }) => {
  const dispatch = useDispatch();

  const decreaseHandler = () => {
    dispatch(decreaseCount(product.id));
  };

  const increaseHandler = () => {
    dispatch(increaseCount(product.id));
  };

  const removeItemHandler = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className={styles.item} key={product.id}>
      <img src={product.img} alt="" />
      <div className={styles.datas}>
        <div>
          <h3>{product.name}</h3>
          <span>({product.size})</span>
        </div>
        <span>${Number(product.price).toFixed(2)}</span>
      </div>
      <div className={styles.amount}>
        <button onClick={decreaseHandler}>-</button>
        <span>{product.count}</span>
        <button onClick={increaseHandler}>+</button>
      </div>
      <button className={styles.delete_item} onClick={removeItemHandler}>
        <img src={trashIcon} alt="" />
      </button>
    </div>
  );
};

export default CartItemData;
