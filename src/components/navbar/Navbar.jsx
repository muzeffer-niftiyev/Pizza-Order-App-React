import {
  styles,
  useState,
  pizzaIcon,
  useSelector,
  arrowDownIcon,
  cartCountIcon,
  likedCountIcon,
} from "./index";

const Navbar = ({ cartBtnHandler, setIsIncreaseBalanceModalOpen }) => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const balance = localStorage.getItem('balance');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

          <button onClick={() => cartBtnHandler()}>
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
              <button
                className={styles.increase}
                onClick={() => setIsIncreaseBalanceModalOpen(true)}
              >
                <p>Increase Balance</p>
              </button>
              <button className={styles.history}>
                <p>History</p>
              </button>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
