import React, { useEffect, useState } from "react";
import { Button, Container, Pagination } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

import ProductCard from "../ProductCard/ProductCard";
import ComicsPage from "../../../pages/ComicsPage";

const ComicsList = () => {
  const { getComics, comics, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

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

  useEffect(() => {
    getComics();
  }, [searchParams]);

  const handlePrev = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage == pages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <ComicsPage />
      <Button onClick={() => navigate("/add")}>ADD COMICS</Button>
      <Container className="d-flex flex-wrap justify-content-between">
        {comics &&
          comics.map((item) => <ProductCard key={item.id} item={item} />)}
        <ComicsPage />
        <Container>
          <Pagination>
            <Pagination.Prev onClick={handlePrev} />
            {getPagesArr().map((item) =>
              currentPage === item ? (
                <Pagination.Item active key={item}>
                  {item}
                </Pagination.Item>
              ) : (
                <Pagination.Item
                  key={item}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </Pagination.Item>
              )
            )}
            <Pagination.Next onClick={handleNext} />
          </Pagination>
        </Container>
      </Container>
    </>
  );
};

export default ComicsList;
