import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./history-items-data.module.css";
import { DataHeader, DataOrders } from "../../index";

const HistoryItemsData = () => {
  const history = useSelector((state) => state.orderHistory.orderHistory);
  const orderId = useSelector((state) => state.orderHistory.clickedOrderId);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const formatPrice = (price) => {
    return Number(price).toFixed(2).toString().replace(".", ",");
  };

  useEffect(() => {
    const order = history.find((item) => item.id === orderId);
    setSelectedOrder(order);
  }, [history, orderId]);

  return (
    <div className={styles.box}>
      <DataHeader
        setSelectedOrder={setSelectedOrder}
        selectedOrder={selectedOrder}
        formatPrice={formatPrice}
      />
      <DataOrders selectedOrder={selectedOrder} formatPrice={formatPrice} />
    </div>
  );
};

export default HistoryItemsData;
