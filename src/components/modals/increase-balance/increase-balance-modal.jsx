import { styles } from "./index";
import { increaseBalance } from "../../../features/balance-slice/balance-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const IncreaseBalanceModal = ({ setIsIncreaseBalanceModalOpen }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const submitBtnHandler = () => {
    dispatch(increaseBalance(amount))
    setIsIncreaseBalanceModalOpen(false);
  };

  const getInputData = (e) => {
  setAmount(parseInt(e.target.value, 10));
  }
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <button className={styles.close_modal}>&times;</button>
        <h3>Increase balance</h3>
        <div>
          <label>Amount you want to add</label>
          <input type="number" min={1} max={500} step={10} onChange={getInputData}/>
        </div>

        <button onClick={submitBtnHandler} className={styles.submit_btn}>Submit</button>
      </div>
    </div>
  );
};

export default IncreaseBalanceModal;
