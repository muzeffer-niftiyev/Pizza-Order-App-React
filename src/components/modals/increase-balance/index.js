import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./increase-balance-modal.module.css";
import { increaseBalance } from "../../../features/balance-slice/balance-slice";
import { closeIncreaseBalanceModal } from "../../../features/balance-slice/balance-slice";

export {
  styles,
  useState,
  useDispatch,
  increaseBalance,
  closeIncreaseBalanceModal,
};
