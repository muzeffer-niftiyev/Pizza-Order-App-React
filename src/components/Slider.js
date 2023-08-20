import Img from "../img/slider-1.png";

export default function Slider() {
  return (
    <>
      <div className="carousel">
        <div className="slides">
          <div className="slide">
            <span>Welcome</span>
            <h1>Discover Pizza House</h1>
            <p>We're delighted to serve you every day from 10:00 to 23:00.</p>
            <p>
              Order online anytime and enjoy a slice of convenience that
              perfectly fits your schedule. And that's not all – experience the
              joy of our swift and reliable delivery service. We're here to
              serve you around the clock. Welcome to Pizza House!
            </p>
            <a href="">
              <button>View Menu</button>
            </a>
          </div>

          <div className="slide">
            <span>Welcome</span>
            <h1>Discover Pizza House</h1>
            <p>We're delighted to serve you every day from 10:00 to 23:00.</p>
            <p>
              Order online anytime and enjoy a slice of convenience that
              perfectly fits your schedule. And that's not all – experience the
              joy of our swift and reliable delivery service. We're here to
              serve you around the clock. Welcome to Pizza House!
            </p>
            <a href="">
              <button>View Menu</button>
            </a>
          </div>
        </div>

        <div className="dots">
          <button>
            <span></span>
          </button>
          <button>
            <span></span>
          </button>
          <button>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* <img src={Img} alt="slider-1" />; */
}
