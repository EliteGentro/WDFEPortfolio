import { useEffect } from "react";
import { useState } from "react";
import data from "../../data/index.json";

function Carousel() {

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const images = data.slides;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
        <p className="section--title">My Certificates</p>
        
      <div className="carousel_wrapper">
        {images.map((image, id) => {
          return (
            <div
              key={id}
              className={
                id == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_src" src={image.src} alt={image.alt}/>
              <div className="card_overlay">
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
      </div>
      <div className="carousel_pagination">
          {images.map((_, id) => {
            return (
              <div
                key={id}
                className={
                  id == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(id)}
              ></div>
            );
          })}
        </div>
    </div>
  );
}

export default Carousel;