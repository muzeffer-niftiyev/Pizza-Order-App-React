import { memo } from "react";
import styles from "./navbar.module.css";
import { NavbarTitle, LikedButton, CartButton, BalanceButton } from "./index";
import { useSelector } from "react-redux";
import IncreaseBalanceModal from "../modals/increase-balance/increase-balance-modal";

const Navbar = memo(() => {
  const isIncreaseBalanceModalOpen = useSelector(
    (state) => state.balance.isIncreaseBalanceModalOpen
  );

  return (
    <nav>
      {isIncreaseBalanceModalOpen && <IncreaseBalanceModal />}
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
