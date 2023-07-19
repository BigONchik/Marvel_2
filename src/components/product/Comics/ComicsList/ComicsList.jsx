import React, { useEffect } from "react";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import { useSearchParams } from "react-router-dom";
import ComicsCard from "../ComicsCard/ComicsCard";
import "./ComicsList.css"


const CharactersList = () => {
  const { characters, getCharacters } = useCharacters();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCharacters();
  }, [searchParams]);
  return( 
  <div className="charactersList">
   {characters.map((character) => (
  <ComicsCard
  key={character.id} character={character} />
))}
  </div>);
};

export default CharactersList;

   