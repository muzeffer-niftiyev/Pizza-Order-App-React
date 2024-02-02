import styles from "./info-modal.module.css";
import { successIcon, errorIcon } from "./index";

const successMessage = "Your order complated successfully!";
const errorMessage =
  "Couldn't complate your order. Please increase your balance and try again!";

const InfoModal = ({ orderStatus, okBtnHandler }) => {
  return (
    orderStatus && (
      <div className={styles.box}>
        <div className={styles.content}>
          <div
            style={{
              backgroundColor:
                orderStatus === "success" ? "#8BC34A" : "#F44336",
            }}
          >
            <img
              src={orderStatus === "success" ? successIcon : errorIcon}
              alt=""
            />
            <h4>{orderStatus}</h4>
          </div>
          <p>{orderStatus === "success" ? successMessage : errorMessage}</p>
          <button
            onClick={okBtnHandler}
            style={{
              backgroundColor:
                orderStatus === "success" ? "#8BC34A" : "#F44336",
            }}
          >
            OK
          </button>
        </div>
      </div>
    )
  );
};

export default InfoModal;
