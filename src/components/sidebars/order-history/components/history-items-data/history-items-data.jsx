import {rightArrowIcon} from './index';
import styles from './history-items-data.module.css';

const HistoryItemsData = ({ order }) => {
  const formatPrice = (price) =>
    price?.toFixed(2).toString()?.replace(".", ",");

  return (
    <div className={styles.order}>
      <h4>{order.date}</h4>
      <div>
        <h3>{formatPrice(order.totalPrice)}</h3>
        <img src={rightArrowIcon} alt="arrow" />
      </div>
    </div>
  );
};

export default HistoryItemsData;
