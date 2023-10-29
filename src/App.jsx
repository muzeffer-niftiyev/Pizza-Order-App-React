import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import Menu from "./components/menu/menu";
import CartItems from "./components/cart-items/cart-items";
import LikedItems from "./components/liked-items/liked-items";
import { useState } from "react";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartBtnHandler = () => {
    setCartIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Navbar cartBtnHandler={cartBtnHandler} />
      <CartItems cartIsOpen={cartIsOpen} backBtnHandler={cartBtnHandler} />
      <LikedItems />
      <Carousel />
      <Menu />
    </div>
  );
};

export default App;
