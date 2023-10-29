import styles from "./navbar.module.css";
import pizzaIcon from "../../assets/icons/header-pizza-icon.svg";
import likedCountIcon from "../../assets/icons/header-liked-count-icon.svg";
import cartCountIcon from "../../assets/icons/header-cart-count-icon.svg";
import { useSelector } from "react-redux";

const Navbar = ({ setCartIsOpen, cartBtnHandler }) => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
