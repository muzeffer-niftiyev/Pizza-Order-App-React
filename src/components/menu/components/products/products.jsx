import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./products.module.css";
import { addToCart, ProductData } from "../../index";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(data.map(() => 0));

  const totalPages = Math.ceil(data.length / 6);
  const startIndex = (currentPage - 1) * 6;
  const endIndex = Math.min(startIndex + 6, data.length);

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

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.products_cont}>
      <div className={styles.container}>
        {data.slice(startIndex, endIndex).map((product, index) => (
          <div
            key={getSelectedProduct(product, index).id}
            className={styles.box}
          >
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
      {totalPages > 1 && (
        <div className={styles.product_pages}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={currentPage === page ? styles.active_button : ""}
                onClick={() => changePageHandler(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
