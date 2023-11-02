import styles from "./cart-items.module.css";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/icons/red-cart-icon.svg";
import clearPageIcon from "../../assets/icons/clear-items.svg";
import leftArrowIcon from "../../assets/icons/left-arrow.svg";
import sadEmojiIcon from "../../assets/icons/sad-emoji.svg";
import trashIcon from "../../assets/icons/trash.svg";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
  clearCart
} from "../../features/cart-items-slice/cart-items-slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const deliveryPrice = 5;

const CartItems = ({ cartIsOpen, backBtnHandler }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const [amount, setAmount] = useState(0);

  const decreaseHandler = (product) => {
    dispatch(decreaseCount(product.id));
  };

  const increaseHandler = (product) => {
    dispatch(increaseCount(product.id));
  };

  const removeItemHandler = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  useEffect(() => {
    const totalAmount = cartItems?.reduce(
      (acc, item) => acc + +item.price * item.count,
      0
    );
    setAmount(totalAmount);
  }, [cartItems]);

  return (
    <div className={cartIsOpen ? `${styles.cont} ${styles.show}` : styles.cont}>
      <div className={styles.header}>
        <button onClick={backBtnHandler}>
          <img src={leftArrowIcon} alt="" />
        </button>
        <h2>
          Cart <img src={cartIcon} alt="icon" />
        </h2>
        <button className={styles.clear_btn} onClick={clearCartHandler}>
          Clear <img src={clearPageIcon} alt="" />
        </button>
      </div>

      {!cartItems.length ? (
        <p className={styles.no_item_message}>
          Cart is empty! <img src={sadEmojiIcon} alt="" />
        </p>
      ) : (
        <div className={styles.content}>
          <div className={styles.cart_items}>
            {cartItems.map((product) => {
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
            })}
          </div>
          <div className={styles.price}>
            <div className={styles.price_cont}>
              <div>
                <h3>Sub Total</h3>
                <span>-</span>
                <span>$ {amount}</span>
              </div>
              <div>
                <h3>Delivery</h3>
                <span>-</span>
                <span>$ {deliveryPrice}</span>
              </div>
              <div className={styles.line}></div>

              <div>
                <h2>TOTAL</h2>
                <span>-</span>
                <span>$ {amount + deliveryPrice}</span>
              </div>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
