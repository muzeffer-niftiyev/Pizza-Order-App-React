import { useState } from "react";
import styles from "./app.module.css";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import CartItems from "./components/cart-items/cart-items";
import LikedItems from "./components/liked-items/liked-items";
import IncreaseBalanceModal from "./components/modals/increase-balance/increase-balance-modal";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isIncreaseBalanceModalOpen, setIsIncreaseBalanceModalOpen] = useState(false);

  const cartBtnHandler = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {isIncreaseBalanceModalOpen && (
        <IncreaseBalanceModal
          setIsIncreaseBalanceModalOpen={setIsIncreaseBalanceModalOpen}
        />
      )}
      <Navbar
        cartBtnHandler={cartBtnHandler}
        setIsIncreaseBalanceModalOpen={setIsIncreaseBalanceModalOpen}
      />
      <CartItems isCartOpen={isCartOpen} backBtnHandler={cartBtnHandler} />
      <LikedItems />
      <Carousel />
      <Menu />
    </div>
  );
};

export default App;
