import Dots from "./components/dots/Dots";
import Slides from "./components/slides/Slides";
import slideData from "../../data/slideData";
import styles from './carousel.module.css';
import { useEffect } from "react";
import { goToNextSlide, goToSlide } from "../../features/carouselSlice/carouselSlice";
import { useDispatch, useSelector } from "react-redux";

const Carousel = () => {
  const curSlide = useSelector(state => state.carousel.curSlide);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(goToNextSlide())
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const goToSlideHandler = (index) => {
    dispatch(goToSlide(index))
  };

  return (
    <div className={styles.carousel}>
      <Slides slideData={slideData} curSlide={curSlide} />
      <Dots slideData={slideData} curSlide={curSlide} goToSlide={goToSlideHandler} />
    </div>
  );
}

export default Carousel;