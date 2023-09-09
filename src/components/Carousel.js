import Dots from "./Dots";
import Slides from "./Slides";
import slider_1 from "../img/slider-1.png";
import slider_2 from "../img/slider-2.png";
import slider_3 from "../img/slider-3.png";
import { useState, useEffect } from "react";

const slideData = [
  {
    title: "Welcome",
    header: "Discover Pizza House",
    firstText: "We're delighted to serve you every day from 10:00 to 23:00.",
    secondText:
      "Order online anytime and enjoy a slice of convenience that perfectly fits your schedule. And that's not all – experience the joy of our swift and reliable delivery service. We're here to serve you around the clock. Welcome to Pizza House!",
    imgSrc: slider_1,
  },

  {
    title: "Delicious",
    header: "Italian Pizza",
    firstText:
      "Our menu is a symphony of flavors, carefully orchestrated to delight your taste buds. Behind every pizza is a story of craftsmanship. Our skilled chefs knead the dough with precision, creating the perfect foundation. Fresh, locally-sourced ingredients are added with care, ensuring quality in every bite.",
    secondText: " ",
    imgSrc: slider_2,
  },

  {
    title: "Family Friendly Dining",
    header: "Create Lasting Memories ",
    firstText:
      "At Pizza House, we believe that dining out is more than just a meal; it's an opportunity to create cherished memories with your loved ones. Our welcoming atmosphere, friendly staff, and delectable menu make it the perfect place to gather with family and friends.",
    imgSrc: slider_3,
  },
];

export default function Slider() {
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (curSlide + 1) % slideData.length;
      setCurSlide(nextSlideIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, [curSlide]);

  const goToSlide = (index) => {
    setCurSlide(index);
  };

  return (
    <div className="carousel">
      <Slides
        slideData={slideData}
        curSlide={curSlide}
      />
      <Dots
        slideData={slideData}
        curSlide={curSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
}
