import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./products.module.css";
import { addToCart, Product } from "./index";

const formatIngredients = (product) => {
  if (!product.details) return;
  const details = product.details.split(",");
  return details.length > 3
    ? `${details.slice(0, 3).join(",")}...`
    : details.join(",");
};
///////////////////////////////////// read more kimi bir buton elave ele basanda butun ingredientler gorunsun
///////////////////////////////////// tezden basanda yene qisa formasi
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

  return (
    <div className={styles.container}>
      {data.map((product, index) => (
        <Product
          index={index}
          key={index}
          product={product}
          selectedOption={selectedOption}
          formatIngredients={formatIngredients}
          addToCartBtnHandler={addToCartBtnHandler}
          changeSizeBtnHandler={changeSizeBtnHandler}
        />
      ))}
    </div>
  );
};

export default Products;
