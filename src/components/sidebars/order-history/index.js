import { SidebarNavbar } from "../cart-items";
import cartIcon from "../../../assets/icons/cart.svg";
import orderIcon from "../../../assets/icons/order.svg";
import DataHeader from "./components/data-header/data-header";
import DataOrders from "./components/data-orders/data-orders";
import deliveredIcon from "../../../assets/icons/delivered.svg";
import rightArrowIcon from "../../../assets/icons/right-arrow.svg";
import HistoryItems from "./components/history-items/history-items";
import leftArrowIcon from "../../../assets/icons/left-arrow-white.svg";
import HistoryItemsData from "./components/history-items-data/history-items-data";
import {
  closeHistory,
  clearHistory,
  setClickedId,
  resetClickedId,
  toggleHistoryItemClicked,
} from "../../../features/order-history-slice";

export {
  cartIcon,
  orderIcon,
  DataOrders,
  DataHeader,
  HistoryItems,
  setClickedId,
  clearHistory,
  closeHistory,
  deliveredIcon,
  SidebarNavbar,
  leftArrowIcon,
  rightArrowIcon,
  resetClickedId,
  HistoryItemsData,
  toggleHistoryItemClicked,
};
