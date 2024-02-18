import { closeCart } from "../../features/cart-items-slice";
import { toggleCart } from "../../features/cart-items-slice";
import CartButton from "./components/cart-button/cart-button";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import pizzaIcon from "../../assets/icons/header-pizza-icon.svg";
import NavbarTitle from "./components/navbar-title/navbar-title";
import LikedButton from "./components/liked-button/liked-button";
import BalanceButton from "./components/balance-button/balance-button";
import { openIncreaseBalanceModal } from "../../features/balance-slice";
import cartCountIcon from "../../assets/icons/header-cart-count-icon.svg";
import likedCountIcon from "../../assets/icons/header-liked-count-icon.svg";
import IncreaseBalanceModal from "../modals/increase-balance/increase-balance-modal";
import {
  toggleHistory,
  closeHistory,
} from "../../features/order-history-slice";

export {
  pizzaIcon,
  closeCart,
  toggleCart,
  CartButton,
  NavbarTitle,
  LikedButton,
  closeHistory,
  cartCountIcon,
  BalanceButton,
  arrowDownIcon,
  toggleHistory,
  likedCountIcon,
  IncreaseBalanceModal,
  openIncreaseBalanceModal,
};
