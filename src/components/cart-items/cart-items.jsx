import InfoModal from "../modals/info-modal/info-modal";
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
import { useDispatch } from "react-redux";
import { closeCart } from "../../features/cart-items-slice/cart-items-slice";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const isCartOpen = useSelector((state) => state.cartItem.isCartOpen);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [orderStatus, setOrderStatus] = useState('');

  const okBtnHandler = () => {
    setOrderStatus('');
  }

  const backBtnHandler = () => {
    dispatch(closeCart());
  }

  useEffect(() => {
    const totalAmount = cartItems?.reduce(
      (acc, item) => acc + Number(item.price) * item.count,
      0
    );
    setAmount(totalAmount);
  }, [cartItems]);

  return (
    <>
      <InfoModal orderStatus={orderStatus} okBtnHandler={okBtnHandler} />
      <div
        className={isCartOpen ? `${styles.cont} ${styles.show}` : styles.cont}
      >
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
            <Price amount={amount} setOrderStatus={setOrderStatus} />
          </div>
        )}
      </div>
    </>
  );
};

export default CartItems;