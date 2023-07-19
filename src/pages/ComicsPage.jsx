import React from "react";
import CarouselComics, {
  slideImages,
} from "../components/Carousel/CarouselComics";

const ComicsPage = () => {
  return (
    <div>
      <h1>My App</h1>
      <CarouselComics images={slideImages} />
    </div>
  );
};

export default ComicsPage;
