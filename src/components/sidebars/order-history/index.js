import { SidebarNavbar } from "../cart-items";
import orderIcon from "../../../assets/icons/order.svg";
import { closeHistory } from "../../../features/order-history-slice";
import { clearHistory } from "../../../features/order-history-slice";
import HistoryItems from "./components/history-items/history-items";
import rightArrowIcon from "../../../assets/icons/right-arrow.svg";
import leftArrowIcon from "../../../assets/icons/left-arrow-white.svg";

export {
  orderIcon,
  leftArrowIcon,
  rightArrowIcon,
  HistoryItems,
  clearHistory,
  closeHistory,
  SidebarNavbar,
};
