import {
  Price,
  styles,
  useState,
  useEffect,
  CartNavbar,
  useSelector,
  CartItemData,
  sadEmojiIcon,
} from "./index";

const CartItems = ({ isCartOpen, backBtnHandler }) => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const totalAmount = cartItems?.reduce(
      (acc, item) => acc + +item.price * item.count,
      0
    );
    setAmount(totalAmount);
  }, [cartItems]);

  return (
    <div className={isCartOpen ? `${styles.cont} ${styles.show}` : styles.cont}>
      <CartNavbar backBtnHandler={backBtnHandler} />

      {!cartItems.length ? (
        <p className={styles.no_item_message}>
          Cart is empty! <img src={sadEmojiIcon} alt="" />
        </p>
      ) : (
        <div className={styles.content}>
          <div className={styles.cart_items}>
            {cartItems.map((product) => (
              <CartItemData product={product} />
            ))}
          </div>
          <Price amount={amount} />
        </div>
      )}
    </div>
  );
};

export default CartItems;
