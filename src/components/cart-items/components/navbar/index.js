import { useDispatch } from "react-redux";
import styles from "./cart-navbar.module.css";
import cartIcon from "../../../../assets/icons/red-cart-icon.svg";
import leftArrowIcon from "../../../../assets/icons/left-arrow.svg";
import clearPageIcon from "../../../../assets/icons/clear-items.svg";
import {
  clearCart,
  closeCart,
} from "../../../../features/cart-items-slice/cart-items-slice";

export {
  styles,
  cartIcon,
  closeCart,
  clearCart,
  useDispatch,
  leftArrowIcon,
  clearPageIcon,
};
