import { useEffect } from "react";
import styles from "./carousel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dots, Slides, goToSlide, slideData, goToNextSlide } from "./index";

const Carousel = () => {
  const curSlide = useSelector((state) => state.carousel.curSlide);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(goToNextSlide());
    }, 3500);

    return () => clearInterval(interval);
  });

  const goToSlideHandler = (index) => {
    dispatch(goToSlide(index));
  };

  return (
    <div className={styles.carousel}>
      <Slides slideData={slideData} curSlide={curSlide} />
      <Dots
        slideData={slideData}
        curSlide={curSlide}
        goToSlide={goToSlideHandler}
      />
    </div>
  );
};

export default Carousel;
