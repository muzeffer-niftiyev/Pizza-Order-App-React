import { useDispatch, useSelector } from "react-redux";
import styles from "./history-items-data.module.css";
import { leftArrowIcon } from "../../index";
import { useEffect, useState } from "react";
import {
  toggleHistoryItemClicked,
  resetClickedId,
} from "../../../../../features/order-history-slice";
import deliveredIcon from "../../../../../assets/icons/delivered.svg";
import cartIcon from "../../../../../assets/icons/cart.svg";

const HistoryItemsData = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.orderHistory.orderHistory);
  const orderId = useSelector((state) => state.orderHistory.clickedOrderId);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const formatTitleDate = (date) => {
    if (!date) return "";
    const [dateStr, timeStr] = date?.split(", ");
    const [day, month, year] = dateStr.split(".");
    const newDate = new Date(year, month - 1, day);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(newDate);
    return `${formattedDate} AT ${timeStr}`;
  };

  const formatDeliveryDate = (date) => {
    if (!date) return "";
    const arr = date?.split(", ");
    const dateArr = arr[0]?.split(".").map(Number);
    const timeArr = arr[1]?.split(":").map(Number);

    let startDate = new Date(
      dateArr[2],
      dateArr[1] - 1,
      dateArr[0],
      timeArr[0],
      timeArr[1]
    );
    startDate.setMinutes(startDate.getMinutes() + 40);

    return `${startDate.getDate()}.${
      startDate.getMonth() + 1
    }.${startDate.getFullYear()}, ${startDate.getHours()}:${startDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const formatPrice = (price) => {
    return Number(price).toFixed(2).toString().replace(".", ",");
  };

  const backBtnHandler = () => {
    dispatch(toggleHistoryItemClicked());
    dispatch(resetClickedId());
    setSelectedOrder(null);
  };

  useEffect(() => {
    const order = history.find((item) => item.id === orderId);
    setSelectedOrder(order);
  }, [history, orderId]);

  useEffect(() => {
    console.log(selectedOrder);
  }, [selectedOrder]);

  return (
    <div className={styles.box}>
      <button onClick={backBtnHandler}>
        <img src={leftArrowIcon} alt="" />
      </button>
      <section>
        <h3 className={styles.top_date}>
          {formatTitleDate(selectedOrder?.date)}
        </h3>
        <div>
          <h5>Order status</h5>
          <p>
            <img src={deliveredIcon} alt="" />
            Delivered, {formatDeliveryDate(selectedOrder?.date)}
          </p>
        </div>
        <div>
          <h5>Total in USD</h5>
          <p>
            <img src={cartIcon} alt="" />{" "}
            {formatPrice(selectedOrder?.totalPrice)}
          </p>
        </div>
        <hr />
      </section>

      <section className={styles.orders}>
        <h3>Your order</h3>

        <h5>Items you ordered</h5>
        <div className={styles.order_items}>
          {selectedOrder?.items.map((product) => {
            return (
              <div key={product.id} className={styles.order_item}>
                <div>
                  <p>{`${product.name} (${product.size})`}</p>
                </div>
                <div className={styles.item_details}>
                  <p>{formatPrice(product.price)}</p>
                  <p>{`x${product.count}`}</p>
                  <p>{formatPrice(Number(product.price) * product.count)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />

        <div className={styles.delivery}>
          <h5>Delivery</h5>
          <div>
            <p>Service fee</p>
            <p>5,00</p>
          </div>
        </div>
        <hr />
        <div className={styles.total_price}>
          <h5>Total</h5>
          <p>{formatPrice(selectedOrder?.totalPrice)}</p>
        </div>
        <hr />

        <h3 className={styles.info}>Order Info</h3>

        <div>
          <p>Order ID: {selectedOrder?.id}</p>
          <p>Timestamp: {selectedOrder?.date}</p>
          <p>Service provider: Pizza House, support@pizzahouse.com</p>
        </div>
      </section>
    </div>
  );
};

export default HistoryItemsData;
