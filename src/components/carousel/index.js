import Dots from "./components/dots/dots";
import styles from "./carousel.module.css";
import slideData from "../../data/slide-data";
import Slides from "./components/slides/slides";
import {
  goToNextSlide,
  goToSlide,
} from "../../features/carousel-slice/carousel-slice";

export { Dots, Slides, slideData, styles, goToNextSlide, goToSlide };
