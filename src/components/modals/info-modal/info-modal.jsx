import styles from "./info-modal.module.css";
import { successIcon, errorIcon } from "./index";

const successMessage = "Your order complated successfully!";
const errorMessage =
  "Couldn't complate your order. Please increase your balance and try again!";

const InfoModal = ({ orderStatus, okBtnHandler }) => {
  const bgColor = orderStatus === "success" ? "#8BC34A" : "#F44336";
  const icon = orderStatus === "success" ? successIcon : errorIcon;
  const message = orderStatus === "success" ? successMessage : errorMessage;

  return (
    orderStatus && (
      <div className={styles.box}>
        <div className={styles.content}>
          <div style={{ backgroundColor: bgColor }}>
            <img src={icon} alt="icon" />
            <h4>{orderStatus}</h4>
          </div>
          <p>{message}</p>
          <button onClick={okBtnHandler} style={{ backgroundColor: bgColor }}>
            OK
          </button>
        </div>
      </div>
    )
  );
};

export default InfoModal;
