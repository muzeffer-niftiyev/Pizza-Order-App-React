import { useSelector } from "react-redux";
import styles from "./order-history.module.css";
import { orderIcon, SidebarNavbar, closeHistory, clearHistory } from "./index";
import { useEffect } from "react";
import HistoryItemsData from "./components/history-items-data/history-items-data";

const OrderHistory = () => {
  const isHistoryOpen = useSelector(
    (state) => state.orderHistory.isHistoryOpen
  );
  const history = useSelector((state) => state.orderHistory.orderHistory);

  useEffect(() => {
    console.log(history);
    console.log(history.length);
  }, [history]);

  return (
    <div
      className={
        isHistoryOpen ? `${styles.container} ${styles.show}` : styles.container
      }
    >
      <SidebarNavbar
        clearData={clearHistory}
        closeSidebar={closeHistory}
        title={"History"}
      />

      {history.length ? (
        <div className={styles.history_cont}>
          <div className={styles.history_items}>
            {history.map((order) => (
              <HistoryItemsData order={order} key={order.id} />
            ))}
          </div>
        </div>
      ) : (
        <p className={styles.no_history_message}>
          You don't have any orders yet! <img src={orderIcon} alt="order" />
        </p>
      )}
    </div>
  );
};

export default OrderHistory;
