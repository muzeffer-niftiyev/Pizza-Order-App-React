import { useDispatch } from "react-redux";
import styles from "./cart-navbar.module.css";
import cartIcon from "../../../../assets/icons/red-cart-icon.svg";
import leftArrowIcon from "../../../../assets/icons/left-arrow.svg";
import clearPageIcon from "../../../../assets/icons/clear-items.svg";
import { clearCart } from "../../../../features/cart-items-slice/cart-items-slice";

export {
  styles,
  cartIcon,
  clearCart,
  useDispatch,
  leftArrowIcon,
  clearPageIcon,
};
