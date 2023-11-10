import {
  styles,
  pizzaIcon,
  useSelector,
  cartCountIcon,
  likedCountIcon,
} from "./index";

const Navbar = ({ cartBtnHandler }) => {
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
