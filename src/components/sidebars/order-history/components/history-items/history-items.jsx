import { rightArrowIcon } from "../../index";
import styles from "./history-items.module.css";
import { toggleHistoryItemClicked } from "../../../../../features/order-history-slice";
import { setClickedId } from "../../../../../features/order-history-slice";
import { useDispatch } from "react-redux";

const HistoryItems = ({ order }) => {
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    price?.toFixed(2).toString()?.replace(".", ",");

  const handleOrderClick = (id) => {
    dispatch(toggleHistoryItemClicked());
    dispatch(setClickedId(id))
  };

  return (
    <button className={styles.order} onClick={() => handleOrderClick(order.id)}>
      <h4>{order.date}</h4>
      <div>
        <h3>{formatPrice(order.totalPrice)}</h3>
        <img src={rightArrowIcon} alt="arrow" />
      </div>
    </button>
  );
};

export default HistoryItems;
