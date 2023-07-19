// import React, { useEffect, useState } from "react";
// import { useProduct } from "../../../contexts/ProductContextProvider";
// import { Container, Pagination } from "react-bootstrap";
// // import ProductCard from "../productCard/ProductCard";
// import { useSearchParams } from "react-router-dom";
// import ProductCard from "../ProductCard/ProductCard";

// const ProductList = () => {
//   const { getProducts, products, pages } = useProduct();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(()=>{
//     setSearchParams({
//       page:currentPage,
//     })
//   },[currentPage])
  
//   function getPagesArr() {
//     const pagesArr = [];
//     for (let i = 1; i <= pages; i++) {
//       pagesArr.push(i);
//     }
//     return pagesArr;
//   }
//   getPagesArr();
//   useEffect(() => {
//     getProducts();
//   }, [searchParams]);

//   const handlePrev = () => {
//     if (currentPage == 1) return;
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage == pages) return;
//     setCurrentPage(currentPage + 1);
//   };
//   return (
//     <Container className="d-flex flex-wrap">
//       {products.map((item) => (
//         <ProductCard key={item.id} item={item} />
//       ))}
//       <Container className="mt-5">
//         <Pagination>
//           <Pagination.Prev onClick={handlePrev} />
//           {getPagesArr().map((item) =>
//             currentPage === item ? (
//               <Pagination.Item active key={item}>
//                 {item}
//               </Pagination.Item>
//             ) : (
//               <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
//                 {item}
//               </Pagination.Item>
//             )
//           )}

//           <Pagination.Next onClick={handleNext} />
//         </Pagination>
//       </Container>
//     </Container>
//   );
// };

// export default ProductList;
