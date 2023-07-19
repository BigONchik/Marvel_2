import React, { useState, useEffect } from "react";
import "./CarouselComics.css";
import heroes1 from "../../assets/white.jpg";
import heroes2 from "../../assets/tanos.jpg";
import heroes4 from "../../assets/ironman.jpg";
import heroes3 from "../../assets/lockysister.jpg";
import heroes5 from "../../assets/spidermen.jpg";

export const slideImages = [heroes1, heroes2, heroes4, heroes3, heroes5];

const CarouselComics = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="carousel">
      <div className="carousel__slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
    </div>
  );
};

export default CarouselComics;
