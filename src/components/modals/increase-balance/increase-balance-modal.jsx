import {
  styles,
  useState,
  useDispatch,
  increaseBalance,
  closeIncreaseBalanceModal,
} from "./index";

const IncreaseBalanceModal = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const isAmountValid = !(amount <= 0 || amount > 500 || isNaN(amount));

  const submitBtnHandler = () => {
    if (isAmountValid) {
      setErrorMessage("");
      dispatch(increaseBalance(amount));
      dispatch(closeIncreaseBalanceModal());
    } else {
      setErrorMessage(
        "Invalid amount! Please enter an amount between 1 and 500."
      );
    }
  };

  const getInputData = (e) => {
    setAmount(parseInt(e.target.value, 10));

    if (errorMessage && e.target.value.trim() !== "") {
      setErrorMessage("");
    }
  };

  const closeModalHandler = () => dispatch(closeIncreaseBalanceModal());
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <button className={styles.close_modal} onClick={closeModalHandler}>
          &times;
        </button>
        <h3>Increase balance</h3>
        <div>
          <label>Amount you want to add</label>
          <input
            type="number"
            min={1}
            max={500}
            step={10}
            onChange={getInputData}
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button onClick={submitBtnHandler} className={styles.submit_btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default IncreaseBalanceModal;
