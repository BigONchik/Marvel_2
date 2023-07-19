import React from "react";
import CarouselComics, {
  slideImages,
} from "../components/Carousel/CarouselComics";

const ComicsPage = () => {
  return (
    <div>
      <CarouselComics images={slideImages} />
    </div>
  );
};

export default ComicsPage;
