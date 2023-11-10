import { styles, likedIcon, ProductData } from "./index";

const Product = ({
  index,
  product,
  selectedOption,
  formatIngredients,
  addToCartBtnHandler,
  changeSizeBtnHandler,
}) => {
  return (
    <div key={product.options[selectedOption[index]].id} className={styles.box}>
      <img
        src={
          product.imgUrl
            ? product.imgUrl
            : product.options[selectedOption[index]].img
        }
        alt="product"
      />
      <ProductData
        index={index}
        product={product}
        selectedOption={selectedOption}
        formatIngredients={formatIngredients}
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
