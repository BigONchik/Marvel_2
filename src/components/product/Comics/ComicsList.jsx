import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

import ProductCard from "../ProductCard/ProductCard";
import ComicsPage from "../../../pages/ComicsPage";

const ComicsList = () => {
  const { getProducts, products, pages } = useProduct();
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

  useEffect(() => {
    getProducts();
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
      <Container className="d-flex flex-wrap justify-content-between">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
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
