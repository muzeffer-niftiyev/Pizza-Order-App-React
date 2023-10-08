import styles from "./navbar.module.css";
import pizzaIcon from "../../assets/icons/header-pizza-icon.svg";
import likedCountIcon from "../../assets/icons/header-liked-count-icon.svg";
import cartCountIcon from "../../assets/icons/header-cart-count-icon.svg";


const Navbar = () => {
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
          <div>
            <div className={styles.icon}>
              <img src={likedCountIcon} alt="" />
              <p>10</p>
            </div>

            <p className={styles.desc}>Liked</p>
          </div>

          <div>
            <div className={styles.icon}>
              <img src={cartCountIcon} alt="" />
              <p>10</p>
            </div>
            <p className={styles.desc}>Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
