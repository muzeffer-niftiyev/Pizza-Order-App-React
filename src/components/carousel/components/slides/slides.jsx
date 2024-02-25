import styles from "./slides.module.css";

const Slides = ({ curSlide, slideData, menuRef }) => {
  const handleGoToMenu = () => {
    if (!menuRef) return;
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
            <button onClick={handleGoToMenu}>View Menu</button>
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
