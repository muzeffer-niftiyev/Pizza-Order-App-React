import styles from "./app.module.css";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import CartItems from "./components/sidebars/cart-items/cart-items";
import LikedItems from "./components/sidebars/liked-items/liked-items";
import OrderHistory from "./components/sidebars/order-history/order-history";


const App = () => {

  return (
    <div className={styles.container}>
      
      <Navbar />
      <CartItems />
      <OrderHistory />
      <LikedItems />
      <Carousel />
      <Menu />
    </div>
  );
};
// menudan evvel restarant haqda melumat kimi bir section elave ele
// caruseldeki view menu menuya aparsin
// seyfenin sonunda footer duzelt
export default App;
