import styles from "./price.module.css";
import { decreaseBalance } from "../../../../features/balance-slice/balance-slice";
import { clearCart } from "../../../../features/cart-items-slice/cart-items-slice";
import { addOrderToHistory } from "../../../../features/order-history-slice/order-history-slice";

export { styles, decreaseBalance, clearCart, addOrderToHistory };
