import { useState } from "react";
import Product from "../product/product";
import { useDispatch } from "react-redux";
import styles from "./products.module.css";
import { addToCart } from "../../../../features/cart-items-slice/cart-items-slice";

export { styles, useDispatch, useState, addToCart, Product };
