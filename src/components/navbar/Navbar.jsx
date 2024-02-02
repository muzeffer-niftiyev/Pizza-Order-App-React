import { memo } from "react";
import styles from "./navbar.module.css";
import { NavbarTitle, LikedButton, CartButton, BalanceButton } from "./index";

const Navbar = memo(() => {
  return (
    <nav>
      <div className={styles.nav_cont}>
        <NavbarTitle />
        <div className={styles.options}>
          <LikedButton />
          <CartButton />
          <BalanceButton />
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
