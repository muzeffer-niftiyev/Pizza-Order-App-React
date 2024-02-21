import { memo } from "react";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import {
  CartButton,
  NavbarTitle,
  BalanceButton,
  IncreaseBalanceModal,
} from "./index";

const Navbar = memo(() => {
  const isIncreaseBalanceModalOpen = useSelector(
    (state) => state.balance.isIncreaseBalanceModalOpen
  );

  return (
    <nav className={styles.main_nav}>
      {isIncreaseBalanceModalOpen && <IncreaseBalanceModal />}
      <div className={styles.nav_cont}>
        <NavbarTitle />
        <div className={styles.options}>
          <CartButton />
          <BalanceButton />
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
