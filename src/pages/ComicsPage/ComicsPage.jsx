import React from "react";
import "./ComicsPage.css";

import charactersPageWalp from "../../assets/marvel characters walp.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharactersList from "../../components/product/Characters/CharacterList/CharactersList";
import ComicsList from "../../components/product/Comics/ComicsList";
import CarouselComics, {
  slideImages,
} from "../../components/Carousel/CarouselComics";

const ComicsPage = () => {
  // const [sortBy, setSortBy] = useState(""); // Состояние для типа сортировки

  // const handleSortChange = (event) => {
  //   setSortBy(event.target.value);
  // };
  return (
    <div className="ComicssPage">
      <CarouselComics images={slideImages} />

      <div className="cp__comicsList">
        <p>MARVEL COMICS LIST</p>
        <SearchBar />
      </div>
      <ComicsList />
    </div>
  );
};

export default ComicsPage;
