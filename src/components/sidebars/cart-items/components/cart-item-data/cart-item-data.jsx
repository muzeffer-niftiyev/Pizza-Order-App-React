import {
  styles,
  trashIcon,
  useDispatch,
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "./index";

const CartItemData = ({ product }) => {
  const dispatch = useDispatch();

  const decreaseHandler = (product) => {
    dispatch(decreaseCount(product.id));
  };

  const increaseHandler = (product) => {
    dispatch(increaseCount(product.id));
  };

  const removeItemHandler = (product) => {
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
        <span>${product.price}0</span>
      </div>
      <div className={styles.amount}>
        <button onClick={() => decreaseHandler(product)}>-</button>
        <span>{product.count}</span>
        <button onClick={() => increaseHandler(product)}>+</button>
      </div>
      <button
        className={styles.delete_item}
        onClick={() => removeItemHandler(product)}
      >
        <img src={trashIcon} alt="" />
      </button>
    </div>
  );
};

export default CartItemData;
