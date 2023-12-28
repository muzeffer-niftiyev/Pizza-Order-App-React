import styles from "./app.module.css";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import CartItems from "./components/cart-items/cart-items";
import LikedItems from "./components/liked-items/liked-items";
import IncreaseBalanceModal from "./components/modals/increase-balance/increase-balance-modal";
import { useSelector } from "react-redux";
/// butun proyektdeki import exportlari seliqeye salmaq lazmdi

const App = () => {
  const isIncreaseBalanceModalOpen = useSelector((state) => state.balance.isIncreaseBalanceModalOpen)

  return (
    <div className={styles.container}>
      {isIncreaseBalanceModalOpen && <IncreaseBalanceModal />}
      <Navbar/>
      <CartItems />
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
