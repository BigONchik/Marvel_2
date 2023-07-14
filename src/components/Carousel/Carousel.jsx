import React, { useState, useEffect } from "react";
import "./Carousel.css";
import heroes1 from "../../assets/marvelheroes.jpg";
import heroes2 from "../../assets/marvelheroes2.jpg";
import heroes4 from "../../assets/marvelheroes4.jpg";
import comics from "../../assets/comics.jpg";

import facebookIcon from "../../assets/facebook icon.png";
import instagramIcon from "../../assets/instagram icon.png";
import twitterIcon from "../../assets/twitter icon.png";

export const slideImages = [
  heroes1,
  heroes2,
  heroes4,
  comics,
];

const Carousel = ({ images }) => {
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
      <div className="socials">
        <a href="https://www.facebook.com/Marvel">
          {" "}
          <img src={facebookIcon} alt="facebook" />
        </a>

        <a href="https://twitter.com/marvel">
          {" "}
          <img src={twitterIcon} alt="twitter" />
        </a>

        <a href="https://www.instagram.com/marvel/">
          {" "}
          <img src={instagramIcon} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Carousel;
