import { useState } from "react";
import styles from "./balance-button.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  arrowDownIcon,
  toggleHistory,
  openIncreaseBalanceModal,
  closeClickedHistoryItem,
} from "../../index";

const BalanceButton = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.balance);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openModalHandler = () => {
    dispatch(openIncreaseBalanceModal());
  };

  const toggleHistoryHandler = () => {
    dispatch(closeCart());
    dispatch(toggleHistory());
    dispatch(closeClickedHistoryItem());
  };

  return (
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
        <div className={styles.increase} onClick={openModalHandler}>
          <p>Increase Balance</p>
        </div>
        <div className={styles.history} onClick={toggleHistoryHandler}>
          <p>Order History</p>
        </div>
      </div>
    </button>
  );
};

export default BalanceButton;
