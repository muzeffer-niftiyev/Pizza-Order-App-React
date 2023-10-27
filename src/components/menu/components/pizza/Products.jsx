import styles from "./products.module.css";
import likedIcon from "../../../../assets/icons/header-liked-count-icon.svg";
import { addToCart } from "../../../../features/cartItemsSlice/cartItemsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const formatIngredients = (product) => {
  const details = product.details.split(",");
  return details.length > 3
    ? `${details.slice(0, 3).join(",")}...`
    : details.join(",");
};

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(data.map(() => 0));

  const addToCartBtnHandler = (product, index) => {
    dispatch(
      addToCart({
        name: product.name,
        img: product.imgUrl,
        price: product.options[selectedOption[index]].price,
      })
    );
  };

  const changeSizeBtnHandler = (index, sizeIndex) => {
    const newIndices = [...selectedOption];
    newIndices[index] = sizeIndex;
    setSelectedOption(newIndices);
  }

  return (
    <div className={styles.container}>
      {data.map((product, index) => (
        <div key={product.id} className={styles.box}>
          <img src={product.imgUrl} alt="product" />
          <div className={styles.product_data}>
            <h4>{product.name}</h4>
            <p>{formatIngredients(product)}</p>
            <div className={styles.size}>
              {product.options.map(({ size }, sizeIndex) => (
                <button
                  key={sizeIndex}
                  className={
                    sizeIndex === selectedOption[index]
                      ? styles.active_size_btn
                      : ""
                  }
                  onClick={() => changeSizeBtnHandler(index, sizeIndex)}
                >
                  {size}
                </button>
              ))}
            </div>
            <span>${product.options[selectedOption[index]].price}.00</span>
          </div>
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
      ))}
    </div>
  );
};

export default Products;
