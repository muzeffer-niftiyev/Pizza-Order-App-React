import { memo, useState } from "react";
import { toggleCart } from "../../features/cart-items-slice/cart-items-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openIncreaseBalanceModal } from "../../features/balance-slice/balance-slice";
import {
  styles,
  pizzaIcon,
  arrowDownIcon,
  cartCountIcon,
  likedCountIcon,
} from "./index";

const Navbar = memo(() => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  const balance = localStorage.getItem("balance");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartBtnHandler = () => {
     dispatch(toggleCart())
  }

  const openModalHandler = () => {
    dispatch(openIncreaseBalanceModal());
  }

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
              <div
                className={styles.increase}
                onClick={openModalHandler}
              >
                <p>Increase Balance</p>
              </div>
              <div className={styles.history}>
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
