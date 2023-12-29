import MenuRouter from "./router";
import styles from "./menu.module.css";
import Links from "./components/links/links";
import pizzasData from "../../data/pizzas-data";
import drinksData from "../../data/drinks-data";
import saladsData from "../../data/salads-data";
import saucesData from "../../data/sauces-data";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products/products";

export { styles, Products, Route, Routes, MenuRouter, Links };
export const datas = { pizzasData, drinksData, saladsData, saucesData };
