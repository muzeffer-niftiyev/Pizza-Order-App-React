import { clearHistoryIcon, leftArrowIcon, historyIcon, styles } from "./index";
import { closeHistory } from "../../../../features/order-history-slice/order-history-slice";
import { useDispatch } from "react-redux";

const HistoryNavbar = () => {
  const dispatch = useDispatch();

  const backBtnHandler = () => {
    dispatch(closeHistory());
  }

  return (
    <header className={styles.header}>
      <button onClick={backBtnHandler}>
        <img src={leftArrowIcon} alt="arrow" />
      </button>
      <h2>
        Order History <img src={historyIcon} alt="icon" />
      </h2>
      <button className={styles.clear}>
        Clear <img src={clearHistoryIcon} alt="clear" />
      </button>
    </header>
  );
};

export default HistoryNavbar;
