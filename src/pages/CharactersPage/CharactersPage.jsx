import React from "react";
import "./CharactersPage.css";

import charactersPageWalp from "../../assets/marvel characters walp.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharactersList from "../../components/product/Characters/CharacterList/CharactersList";

const CharactersPage = () => {
  // const [sortBy, setSortBy] = useState(""); // Состояние для типа сортировки

  // const handleSortChange = (event) => {
  //   setSortBy(event.target.value);
  // };
  return (
    <div className="CharactersPage">
      <div className="cp__main">
        <img src={charactersPageWalp} alt="" srcset="" />
        <div className="cp__main_texts">
          {" "}
          <p>MARVEL CHARACTERS</p>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </div>
      </div>
      <div className="cp__characterList">
        <p>MARVEL CHARACTERS LIST</p>
        <SearchBar />
      </div>
      <CharactersList />
    </div>
  );
};

export default CharactersPage;
