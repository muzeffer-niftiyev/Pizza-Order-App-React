import { memo, useState } from "react";
import styles from "./navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import pizzaIcon from "../../assets/icons/header-pizza-icon.svg";
import cartCountIcon from "../../assets/icons/header-cart-count-icon.svg";
import likedCountIcon from "../../assets/icons/header-liked-count-icon.svg";
import { toggleCart } from "../../features/cart-items-slice/cart-items-slice";
import { openIncreaseBalanceModal } from "../../features/balance-slice/balance-slice";

export {
  memo,
  styles,
  useState,
  pizzaIcon,
  toggleCart,
  useDispatch,
  useSelector,
  arrowDownIcon,
  cartCountIcon,
  likedCountIcon,
  openIncreaseBalanceModal,
};
