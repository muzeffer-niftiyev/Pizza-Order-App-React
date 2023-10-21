import styles from "./cartItems.module.css";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/icons/red-cart-icon.svg";
import clearPageIcon from "../../assets/icons/clear-items.svg";
import leftArrowIcon from "../../assets/icons/left-arrow.svg";
import sadEmojiIcon from "../../assets/icons/sad-emoji.svg";
import trashIcon from "../../assets/icons/trash.svg";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);

  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <button>
          <img src={leftArrowIcon} alt="" />
        </button>
        <h2>
          Cart <img src={cartIcon} alt="icon" />
        </h2>
        <button className={styles.clear_btn}>
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
            {cartItems.map((pizza) => {
              return (
                <div className={styles.item}>
                  <img src={pizza.img} alt="" />
                  <div>
                    <h3>{pizza.name}</h3>
                    <span>${pizza.price}.00</span>
                  </div>
                  <div className={styles.amount}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button className={styles.delete_item}>
                    <img src={trashIcon} alt="" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
