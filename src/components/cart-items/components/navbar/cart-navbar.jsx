import {
  styles,
  cartIcon,
  clearCart,
  closeCart,
  useDispatch,
  leftArrowIcon,
  clearPageIcon,
} from "./index";

const CartNavbar = () => {
  const dispatch = useDispatch();
  
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const backBtnHandler = () => {
    dispatch(closeCart());
  };

  return (
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
  );
};

export default CartNavbar;
