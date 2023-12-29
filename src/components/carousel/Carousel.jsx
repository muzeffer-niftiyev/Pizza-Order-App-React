import {
  Dots,
  Slides,
  styles,
  useEffect,
  goToSlide,
  slideData,
  useDispatch,
  useSelector,
  goToNextSlide,
} from "./index";

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
