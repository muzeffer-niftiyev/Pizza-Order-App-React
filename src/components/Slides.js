export default function Slides({curSlide, slideData}) {
  return (
    <div className="slides">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${(index - curSlide) * 100}%)` }}
        >
          <div className="content">
            <span>{slide.title}</span>
            <h1>{slide.header}</h1>
            <p>{slide.firstText}</p>
            <p>{slide.secondText}</p>
            <a href="###">
              <button>View Menu</button>
            </a>
          </div>

          <div className="image">
            <img src={slide.imgSrc} alt={slide.imgSrc} />
          </div>
        </div>
      ))}
    </div>
  );
}
