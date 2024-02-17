import Price from "./components/price/price";
import trashIcon from "../../../assets/icons/trash.svg";
import InfoModal from "../../modals/info-modal/info-modal";
import sadEmojiIcon from "../../../assets/icons/sad-emoji.svg";
import { decreaseBalance } from "../../../features/balance-slice";
import CartItemData from "./components/cart-item-data/cart-item-data";
import SidebarNavbar from "../components/sidebar-navbar/sidebar-navbar";
import { addOrderToHistory } from "../../../features/order-history-slice";
import {
  clearCart,
  closeCart,
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../../../features/cart-items-slice";

export {
  Price,
  clearCart,
  closeCart,
  InfoModal,
  trashIcon,
  CartItemData,
  sadEmojiIcon,
  increaseCount,
  SidebarNavbar,
  decreaseCount,
  removeFromCart,
  decreaseBalance,
  addOrderToHistory,
};
