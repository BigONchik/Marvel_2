// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AuthContextProvider from "./contexts/AuthContextProvider";
//   import CharactersContextProvider from "./contexts/CharactersContextProvider";
// import ProductContextProvider from "./contexts/ProductContextProvider";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <AuthContextProvider>
//       <ProductContextProvider>
//       <CharactersContextProvider>
//         <App />
//         </CharactersContextProvider>
//       </ProductContextProvider>
//     </AuthContextProvider>
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CharactersContextProvider from "./contexts/CharactersContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <CharactersContextProvider>
          <App />
        </CharactersContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
