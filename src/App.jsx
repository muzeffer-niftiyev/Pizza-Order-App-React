import styles from "./app.module.css";
import { useSelector } from "react-redux";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import CartItems from "./components/sidebars/cart-items/cart-items";
import LikedItems from "./components/sidebars/liked-items/liked-items";
import OrderHistory from "./components/sidebars/order-history/order-history";
import IncreaseBalanceModal from "./components/modals/increase-balance/increase-balance-modal";

const App = () => {
  const isIncreaseBalanceModalOpen = useSelector(
    (state) => state.balance.isIncreaseBalanceModalOpen
  );

  return (
    <div className={styles.container}>
      {isIncreaseBalanceModalOpen && <IncreaseBalanceModal />}
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
