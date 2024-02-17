import styles from "./product.module.css";
import { likedIcon, ProductData } from "./index";

const Product = ({
  index,
  product,
  selectedOption,
  addToCartBtnHandler,
  changeSizeBtnHandler,
}) => {
  const selectedProduct = product.options[selectedOption[index]];
  return (
    <div key={selectedProduct.id} className={styles.box}>
      <img
        src={
          product.imgUrl
            ? product.imgUrl
            : selectedProduct.img
        }
        alt="product"
      />
      <ProductData
        index={index}
        product={product}
        selectedOption={selectedOption}
        changeSizeBtnHandler={changeSizeBtnHandler}
      />
      <button className={styles.liked_btn}>
        <img src={likedIcon} alt="" />
      </button>
      <button
        className={styles.cart_btn}
        onClick={() => addToCartBtnHandler(product, index)}
      >
        Add to cart
      </button>
    </div>
  );
};

// prop drilling i solve ele ***mutleq***

export default Product;
