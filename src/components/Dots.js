export default function Dots({ goToSlide, curSlide, slideData }) {
  return (
    <div className="dots">
      {slideData.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={curSlide === index ? "active" : ""}
        >
          <span></span>
        </button>
      ))}
    </div>
  );
}
