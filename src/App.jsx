import { useRef } from "react";
import styles from "./app.module.css";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Carousel from "./components/carousel/carousel";
import CartItems from "./components/sidebars/cart-items/cart-items";
import OrderHistory from "./components/sidebars/order-history/order-history";

const App = () => {
  const menuRef = useRef();

  return (
    <div className={styles.container}>
      <Navbar />
      <CartItems />
      <OrderHistory />
      <Carousel menuRef={menuRef} />
      <Menu menuRef={menuRef} />
      <Footer />
    </div>
  );
};

export default App;
