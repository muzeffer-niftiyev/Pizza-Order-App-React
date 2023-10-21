import styles from './app.module.css';
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Menu from "./components/menu/Menu";
import CartItems from "./components/cartItems/CartItems";
import LikedItems from './components/likedItems/LikedItems';

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <CartItems/>
      <LikedItems/>
      <Carousel />
      <Menu />
    </div>
  );
};

export default App;
