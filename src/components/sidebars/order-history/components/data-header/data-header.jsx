import { useDispatch } from "react-redux";
import styles from "./data-header.module.css";
import {
  cartIcon,
  deliveredIcon,
  resetClickedId,
  leftArrowWhiteIcon,
  toggleHistoryItemClicked,
} from "../../index";

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
  const day = startDate.getDate().toString().padStart(2, "0");
  const month = (startDate.getMonth() + 1).toString().padStart(2, "0");
  const hour = startDate.getHours().toString().padStart(2, "0");
  const minute = startDate.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${startDate.getFullYear()}, ${hour}:${minute}`;
};

const DataHeader = ({ setSelectedOrder, selectedOrder, formatPrice }) => {
  const dispatch = useDispatch();

  const backBtnHandler = () => {
    dispatch(toggleHistoryItemClicked());
    dispatch(resetClickedId());
    setSelectedOrder(null);
  };

  return (
    <>
      <button onClick={backBtnHandler}>
        <img src={leftArrowWhiteIcon} alt="" />
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
            <img src={cartIcon} alt="" />
            {formatPrice(selectedOrder?.totalPrice)}
          </p>
        </div>
        <hr />
      </section>
    </>
  );
};

export default DataHeader;
