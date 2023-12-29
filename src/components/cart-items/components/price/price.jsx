import {
  styles,
  closeCart,
  clearCart,
  useEffect,
  useDispatch,
  useSelector,
  decreaseBalance,
  addOrderToHistory,
} from "./index";

const Price = ({ amount, setOrderStatus }) => {
  const orderedItems = useSelector((state) => state.cartItem.cartItems);
  const dispatch = useDispatch();
  const balance = localStorage.getItem("balance");
  const deliveryPrice = 5; // helelik sabit value'di user seciminden asili olaraq hesablanacaq qiymet

  const getOrderDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

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

      // dispatch(
      //   addOrderToHistory([
      //     ...orderedItems,
      //     { date: getOrderDate(), totalPrice: amount + deliveryPrice },
      //   ])
      // );
      dispatch(
        addOrderToHistory({
          date: getOrderDate(),
          totalPrice: amount + deliveryPrice,
          items: [...orderedItems],
        })
      );
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "orderHistory",
      JSON.stringify([...orderedItems, { date: getOrderDate() }])
    );
  }, [orderedItems]);

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
