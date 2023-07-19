// import React, { useState } from "react";
// import { FormControl, Button } from "react-bootstrap";

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = () => {
//     // Обработка поискового запроса
//     console.log("Search text:", searchText);
//   };

//   const handleChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl
//         type="text"
//         placeholder="Search"
//         value={searchText}
//         onChange={handleChange}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
//   const [searchResults, setSearchResults] = useState([])

 useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  return (
    <div className="SearchBar">
      <input
        type="search"
        name="search"
        id=""
        value={search}
        placeholder="SEARCH"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;



