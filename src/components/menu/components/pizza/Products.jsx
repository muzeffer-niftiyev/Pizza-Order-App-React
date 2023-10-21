import styles from "./products.module.css";
import likedIcon from "../../../../assets/icons/header-liked-count-icon.svg";
import { addToCart } from "../../../../features/cartItemsSlice/cartItemsSlice";
import { useDispatch } from "react-redux";

const Pizzas = ({data}) => {
  const dispatch = useDispatch();

  const addToCartBtnHandler = (product) => {
    dispatch(
      addToCart({
        name: product.name,
        img: product.imgUrl,
        price: product.price,
      })
    );
  };

  return (
    <div className={styles.container}>
      {data.map((product) => {
        const details = product.details.split(",");
        const formattedIngredientsData =
          details.length > 3
            ? `${details.slice(0, 3).join(",")}...`
            : details.join(",");
        return (
          <div key={product.id} className={styles.box}>
            <img src={product.imgUrl} alt="product" />
            <div className={styles.product_data}>
              <h4>{product.name}</h4>
              <p>{formattedIngredientsData}</p>
              <div className={styles.size}>
                {product.sizes.map((size) => <button>{size}</button>)}
              </div>
              <span>${product.price}.00</span>
            </div>
            <button className={styles.liked_btn}>
              <img src={likedIcon} alt="" />
            </button>
            <button
              className={styles.cart_btn}
              onClick={() => addToCartBtnHandler(product)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pizzas;
