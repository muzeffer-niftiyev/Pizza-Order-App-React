import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./products.module.css";
import { addToCart, ProductData } from "../../index";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(data.map(() => 0));

  const addToCartBtnHandler = (product, index) => {
    const curOption = product.options[selectedOption[index]];

    dispatch(
      addToCart({
        id: curOption.id,
        name: product.name,
        img: product.imgUrl ? product.imgUrl : curOption.img,
        price: curOption.price,
        size: curOption.size,
      })
    );
  };

  const changeSizeBtnHandler = (index, sizeIndex) => {
    const newIndices = [...selectedOption];
    newIndices[index] = sizeIndex;
    setSelectedOption(newIndices);
  };

  const getSelectedProduct = (product, index) => {
    return product.options[selectedOption[index]];
  };

  return (
    <div className={styles.container}>
      {data.map((product, index) => (
        <div key={getSelectedProduct(product, index).id} className={styles.box}>
          <img
            src={
              product.imgUrl
                ? product.imgUrl
                : getSelectedProduct(product, index).img
            }
            alt="product"
          />
          <ProductData
            index={index}
            product={product}
            selectedOption={selectedOption}
            changeSizeBtnHandler={changeSizeBtnHandler}
          />
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
