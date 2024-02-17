import { useSelector } from "react-redux";
import styles from './history-items-data.module.css'

const HistoryItemsData = () => {
    const history = useSelector((state) => state.orderHistory.orderHistory);
    const orderId = useSelector((state) => state.orderHistory.clickedOrderId);

    return (<div className={styles.box}>
        
    </div>)
}

export default HistoryItemsData;