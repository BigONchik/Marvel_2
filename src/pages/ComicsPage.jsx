import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComicsCard from "../components/product/ComicsCard/ComicsCard";
import { CardGroup, Container, Pagination } from "react-bootstrap";
import { useProduct } from "../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ComicsPage = () => {
  const slidesData = [
    {
      id: 1,
      imageUrl:
        "https://cdn.marvel.com/u/prod/marvel/i/mg/5/a0/64a5134d24ea1.jpg",
      alt: "Slide 1",
      text: "YELENA BELOVA RETURNS IN 'WHITE WIDOW",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.marvel.com/u/prod/marvel/i/mg/4/00/64a517759d3e6.jpg",
      alt: "Slide 2",
      text: "AL EWING PAVES THE WAY FOR GENESIS WAR",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.marvel.com/u/prod/marvel/i/mg/b/03/64a51437a8387.jpg",
      alt: "Slide 3",
      text: "WAR MACHINE'S GREATEST MOMENTS",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.marvel.com/u/prod/marvel/i/mg/2/d0/64a51501806fa.jpg",
      alt: "Slide 4",
      text: "THE ORIGIN OF HELA, GODDESS OF DEATH",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.marvel.com/u/prod/marvel/i/mg/3/50/64a51bd683903.jpg",
      alt: "Slide 5",
      text: "Slide 5 Text",
    },
  ];

  const [slides, setSlides] = useState(slidesData);
  const { getProducts, product, pages } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const handleSlideClick = (index) => {
    console.log("Slide clicked:", index);
  };

  const handleNextSlide = () => {
    const updatedSlides = [...slides];
    const lastSlide = updatedSlides.pop();
    updatedSlides.unshift(lastSlide);
    setSlides(updatedSlides);
  };

  const handlePrevSlide = () => {
    const updatedSlides = [...slides];
    const firstSlide = updatedSlides.shift();
    updatedSlides.push(firstSlide);
    setSlides(updatedSlides);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 15,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ display: "inline-block" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "#fff",
          borderRadius: "50%",
        }}
      />
    ),
    appendArrows: (arrows) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {arrows}
      </div>
    ),
  };

  return (
    <Container className="d-flex flex-wrap justify-content-between">
      {product.map((item) => (
        <ComicsCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default ComicsPage;
