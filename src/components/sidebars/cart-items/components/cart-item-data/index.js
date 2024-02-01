import { useDispatch } from "react-redux";
import styles from "./cart-item-data.module.css";
import trashIcon from "../../../../../assets/icons/trash.svg";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../../../../../features/cart-items-slice/cart-items-slice";

export {
  styles,
  trashIcon,
  useDispatch,
  increaseCount,
  decreaseCount,
  removeFromCart,
};
