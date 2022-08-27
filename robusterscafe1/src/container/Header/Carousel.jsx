import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import "./Carousel.css";
export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();
  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };
  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const prev = () => {
    // startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    // startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          //  Carausel Item
          <div
            className="carousel-item"
            onMouseEnter={stopSlideTimer}
            onMouseLeave={startSlideTimer}
            onTouchStart={stopSlideTimer}
          >
            <img  className="heroImages" src={slide} />
          </div>
        ))}
      </div>
      {/* carousel indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            className={`carousel-indicator-item${
              currentSlide === index ? " active" : ""
            }`}
            onClick={() => switchIndex(index)}
            onMouseEnter={stopSlideTimer}
          ></button>
        ))}
      </div>
      {/* carousel controls */}
      <button className="carousel-control left" onClick={prev}    onMouseEnter={stopSlideTimer}
            onMouseLeave={startSlideTimer}>
        <FaChevronLeft/>
      </button>
      <button className="carousel-control right" onClick={next}    onMouseEnter={stopSlideTimer}
            onMouseLeave={startSlideTimer}>
      <FaChevronRight/>
      </button>
    </div>
  );
}
