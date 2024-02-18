import { useSelector } from "react-redux";
import styles from "./order-history.module.css";
import {
  orderIcon,
  HistoryItems,
  clearHistory,
  closeHistory,
  SidebarNavbar,
  HistoryItemsData,
} from "./index";

const OrderHistory = () => {
  const isHistoryOpen = useSelector(
    (state) => state.orderHistory.isHistoryOpen
  );
  const isHistoryItemClicked = useSelector(
    (state) => state.orderHistory.isHistoryItemClicked
  );
  const history = useSelector((state) => state.orderHistory.orderHistory);

  return (
    <div
      className={
        isHistoryOpen ? `${styles.container} ${styles.show}` : styles.container
      }
    >
      {isHistoryItemClicked ? (
        <HistoryItemsData />
      ) : (
        <>
          <SidebarNavbar
            clearData={clearHistory}
            closeSidebar={closeHistory}
            title={"History"}
          />
          {history.length ? (
            <div className={styles.history_cont}>
              <div className={styles.history_items}>
                {history.map((order) => (
                  <HistoryItems order={order} key={order.id} />
                ))}
              </div>
            </div>
          ) : (
            <p className={styles.no_history_message}>
              You don't have any orders yet! <img src={orderIcon} alt="order" />
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default OrderHistory;
