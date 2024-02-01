import {
  memo,
  styles,
  useState,
  pizzaIcon,
  toggleCart,
  useDispatch,
  useSelector,
  arrowDownIcon,
  cartCountIcon,
  likedCountIcon,
  openIncreaseBalanceModal,
} from "./index";
import { toggleHistory } from "../../features/order-history-slice/order-history-slice";

const Navbar = memo(() => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const balance = useSelector((state) => state.balance.balance);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartBtnHandler = () => {
    dispatch(toggleCart());
  };

  const toggleModalHandler = () => {
    dispatch(openIncreaseBalanceModal());
  };

  const toggleHistoryHandler = () => {
    dispatch(toggleHistory());
  };

  return (
    <nav>
      <div className={styles.nav_cont}>
        <header>
          <div>
            <img src={pizzaIcon} alt="" />
            <h1>Pizza</h1>
          </div>
          <span>House</span>
        </header>

        <div className={styles.options}>
          <button>
            <div className={styles.icon}>
              <img src={likedCountIcon} alt="" />
              <p>10</p>
            </div>
            <p className={styles.desc}>Liked</p>
          </button>
          <button onClick={cartBtnHandler}>
            <div className={styles.icon}>
              <img src={cartCountIcon} alt="" />
              <p>{cartItems.length}</p>
            </div>
            <p className={styles.desc}>Cart</p>
          </button>

          <button
            className={`${styles.balance} ${
              isDropdownOpen ? styles.dropdownIsOpen : ""
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div>
              <span>Balance</span>
              <p>${balance}</p>
              <img src={arrowDownIcon} alt="" />
            </div>

            <div className={styles.dropdown}>
              <div className={styles.increase} onClick={toggleModalHandler}>
                <p>Increase Balance</p>
              </div>
              <div className={styles.history} onClick={toggleHistoryHandler}>
                <p>Order History</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
