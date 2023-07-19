import React, { useEffect, useState } from "react";
import "./CharactersPage.css";

import charactersPageWalp from "../../assets/marvel characters walp.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CharactersList from "../../components/product/Characters/CharacterList/CharactersList";
import { Pagination } from "react-bootstrap";
import { useCharacters } from "../../contexts/CharactersContextProvider";
import { useSearchParams } from "react-router-dom";


const CharactersPage = () => {
  const { getCharacters, characters, pages } = useCharacters();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function getPagesArr() {
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }
    return pagesArr;
  }
  getPagesArr();
  useEffect(() => {
    getCharacters();
  }, [searchParams]);

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage === pages) return;
    setCurrentPage(currentPage + 1);
  };

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
      <Pagination>
        <Pagination.Prev onClick={handlePrev} />
        {getPagesArr().map((item) =>
          currentPage === item ? (
            <Pagination.Item active key={item}>
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}
        <Pagination.Next onClick={handleNext} />
      </Pagination>
    </div>
  );
};

export default CharactersPage;


