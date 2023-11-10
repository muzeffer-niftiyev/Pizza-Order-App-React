import { styles } from "./index";

const Slides = ({ curSlide, slideData }) => {
  return (
    <div className={styles.slides}>
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{ transform: `translateX(${(index - curSlide) * 100}%)` }}
        >
          <div className={styles.content}>
            <span>{slide.title}</span>
            <h1>{slide.header}</h1>
            <p>{slide.firstText}</p>
            <p>{slide.secondText}</p>
            <a href="###">
              <button>View Menu</button>
            </a>
          </div>

          <div className={styles.image}>
            <img src={slide.imgSrc} alt={slide.imgSrc} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;
