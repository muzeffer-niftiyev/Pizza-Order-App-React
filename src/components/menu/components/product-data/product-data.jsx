import { styles } from "./index";

const ProductData = ({
  index,
  product,
  selectedOption,
  formatIngredients,
  changeSizeBtnHandler,
}) => {
  return (
    <div className={styles.product_data}>
      <h4>{product.name}</h4>
      <p>{formatIngredients(product)}</p>
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
      <span>${product.options[selectedOption[index]].price}0</span>
    </div>
  );
};

export default ProductData;
