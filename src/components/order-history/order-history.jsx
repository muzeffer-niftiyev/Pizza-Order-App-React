import { styles, orderIcon, rightArrowIcon, HistoryNavbar } from "./index";
import { useSelector } from "react-redux/es/hooks/useSelector";

const OrderHistory = () => {
  const isHistoryOpen = useSelector(
    (state) => state.orderHistory.isHistoryOpen
  );
  const history = JSON.parse(localStorage.getItem("orderHistory"));
  const formatPrice = (price) => price?.toFixed(2).toString()?.replace(".", ",");

  return (
    <div
      className={
        isHistoryOpen ? `${styles.container} ${styles.show}` : styles.container
      }
    >
      <HistoryNavbar />

      {!history?.length ? (
        <p className={styles.empty_message}>
          You don't have any orders yet! <img src={orderIcon} alt="order" />
        </p>
      ) : (
        <div className={styles.history_cont}>
          {history?.map((order) => (
            <div className={styles.history_items} key={order.date}>
              <h3>{order.date}</h3>
              <div>
                <h4>{formatPrice(order.totalPrice)}</h4>
                <img src={rightArrowIcon} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
