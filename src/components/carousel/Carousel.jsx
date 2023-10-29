import Dots from "./components/dots/dots";
import Slides from "./components/slides/slides";
import slideData from "../../data/slide-data";
import styles from "./carousel.module.css";
import { useEffect } from "react";
import {
  goToNextSlide,
  goToSlide,
} from "../../features/carousel-slice/carousel-slice";
import { useDispatch, useSelector } from "react-redux";

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
