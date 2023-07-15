import React from "react";
import "./CharactersPage.css";


import charactersPageWalp from "../../assets/marvel characters walp.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharactersList from "../../components/product/Characters/CharacterList/CharactersList";

const CharactersPage = () => {
  return (
    <div className="CharactersPage">
      <div className="cp__main">
        <img src={charactersPageWalp} alt="" srcset="" />
        <p>MARVEL CHARACTERS</p>
        <p>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </p>
      </div>
      <div className="cp__characterList">
        <p>MARVEL CHARACTERS LIST</p>
        <SearchBar/>
      </div>
      <CharactersList/>

    </div>
  );
};

export default CharactersPage;
