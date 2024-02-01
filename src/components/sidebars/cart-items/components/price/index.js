import { useEffect } from "react";
import styles from "./price.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseBalance } from "../../../../../features/balance-slice/balance-slice";
import { clearCart } from "../../../../../features/cart-items-slice/cart-items-slice";
import { closeCart } from "../../../../../features/cart-items-slice/cart-items-slice";
import { addOrderToHistory } from "../../../../../features/order-history-slice/order-history-slice";

export {
  styles,
  closeCart,
  clearCart,
  useEffect,
  useDispatch,
  useSelector,
  decreaseBalance,
  addOrderToHistory,
};
