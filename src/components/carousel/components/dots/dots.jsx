import styles from "./dots.module.css";

const Dots = ({ goToSlide, curSlide, slideData }) => {
  return (
    <div className={styles.dots}>
      {slideData.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={curSlide === index ? `${styles.active}` : ""}
        >
          <span></span>
        </button>
      ))}
    </div>
  );
};

export default Dots;
