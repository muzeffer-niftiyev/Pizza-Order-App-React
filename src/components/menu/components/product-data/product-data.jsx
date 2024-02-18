import { useState } from "react";
import styles from "./product-data.module.css";

const formatIngredients = (product) => {
  if (!product.details) return;
  const details = product.details.split(",");
  return details.length > 3
    ? `${details.slice(0, 3).join(",")}...`
    : details.join(",");
};

const ProductData = ({
  index,
  product,
  selectedOption,
  changeSizeBtnHandler,
}) => {
  const [showFullIngredients, setShowFullIngredients] = useState(false);
  const buttonCondition = product.details?.split(",").length > 3;
  const productPrice = Number(product.options[selectedOption[index]].price)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  const toggleIngredients = () => {
    setShowFullIngredients(!showFullIngredients);
  };

  return (
    <div className={styles.product_data}>
      <h4>{product.name}</h4>
      <p>
        {showFullIngredients ? product.details : formatIngredients(product)}
        {buttonCondition && (
          <button onClick={toggleIngredients} className={styles.show_more_btn}>
            {showFullIngredients ? "Show Less" : "Show More"}
          </button>
        )}
      </p>

      <div className={styles.size}>
        {product?.options.map(({ size }, sizeIndex) => (
          <button
            key={sizeIndex}
            className={
              sizeIndex === selectedOption[index] ? styles.active_size_btn : ""
            }
            onClick={() => changeSizeBtnHandler(index, sizeIndex)}
          >
            {size}
          </button>
        ))}
      </div>
      <span>${productPrice}</span>
    </div>
  );
};

export default ProductData;
