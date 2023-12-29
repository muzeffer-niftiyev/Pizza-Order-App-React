import { useEffect } from "react";
import Dots from "./components/dots/dots";
import styles from "./carousel.module.css";
import slideData from "../../data/slide-data";
import Slides from "./components/slides/slides";
import {
  goToSlide,
  goToNextSlide,
} from "../../features/carousel-slice/carousel-slice";
import { useDispatch, useSelector } from "react-redux";

export {
  Dots,
  Slides,
  styles,
  goToSlide,
  slideData,
  useEffect,
  useDispatch,
  useSelector,
  goToNextSlide,
};
