import MenuRouter from "./router";
import Links from "./components/links/links";
import pizzasData from "../../data/pizzas-data";
import drinksData from "../../data/drinks-data";
import saladsData from "../../data/salads-data";
import saucesData from "../../data/sauces-data";
import Product from "./components/product/product";
import Products from "./components/products/products";
import { addToCart } from "../../features/cart-items-slice";
import ProductData from "./components/product-data/product-data";
import likedIcon from "../../assets/icons/header-liked-count-icon.svg";

export {
  Links,
  Product,
  Products,
  addToCart,
  likedIcon,
  MenuRouter,
  ProductData,
};
export const datas = { pizzasData, drinksData, saladsData, saucesData };
