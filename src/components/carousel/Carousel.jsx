import Dots from "./components/dots/Dots";
import Slides from "./components/slides/Slides";
import slideData from "../../data/slideData";
import styles from './carousel.module.css'
import { useState, useEffect } from "react";

const Carousel = () => {
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (curSlide + 1) % slideData.length;
      setCurSlide(nextSlideIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [curSlide]);

  const goToSlide = (index) => {
    setCurSlide(index);
  };

  return (
    <div className={styles.carousel}>
      <Slides slideData={slideData} curSlide={curSlide} />
      <Dots slideData={slideData} curSlide={curSlide} goToSlide={goToSlide} />
    </div>
  );
}

export default Carousel;