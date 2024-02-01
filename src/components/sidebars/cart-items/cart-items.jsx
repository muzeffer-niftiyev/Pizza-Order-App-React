import {
  Price,
  styles,
  useState,
  useEffect,
  InfoModal,
  SidebarNavbar,
  useSelector,
  CartItemData,
  sadEmojiIcon,
} from "./index";

import {
  clearCart,
  closeCart,
} from "../../../features/cart-items-slice/cart-items-slice";

const CartItems = () => {
  
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const isCartOpen = useSelector((state) => state.cartItem.isCartOpen);
  const [amount, setAmount] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");

  const okBtnHandler = () => {
    setOrderStatus("");
  };

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
        <SidebarNavbar clearData={clearCart} closeSidebar={closeCart} title={'Cart'}/>

        {!cartItems.length ? (
          <p className={styles.no_item_message}>
            Cart is empty! <img src={sadEmojiIcon} alt="" />
          </p>
        ) : (
          <div className={styles.content}>
            <div className={styles.cart_items}>
              {cartItems.map((product) => (
                <CartItemData product={product} key={product.id} />
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
