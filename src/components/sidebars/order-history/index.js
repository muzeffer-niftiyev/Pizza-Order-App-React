import { SidebarNavbar } from "../cart-items";
import DataHeader from "./components/data-header/data-header";
import DataOrders from "./components/data-orders/data-orders";
import HistoryItems from "./components/history-items/history-items";
import HistoryItemsData from "./components/history-items-data/history-items-data";
import {
  cartIcon,
  orderIcon,
  deliveredIcon,
  rightArrowIcon,
  leftArrowWhiteIcon,
} from "../../../assets/icons";
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
  rightArrowIcon,
  resetClickedId,
  HistoryItemsData,
  leftArrowWhiteIcon,
  toggleHistoryItemClicked,
};
