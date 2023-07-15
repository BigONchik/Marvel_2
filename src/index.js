import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./contexts/AuthContextProvider";
// import ProductContextProvider from "./contexts/ProductContextProvider";
import CharactersContextProvider from "./contexts/CharactersContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      {/* <ProductContextProvider> */}
      <CharactersContextProvider>
        <App />
        </CharactersContextProvider>
      {/* </ProductContextProvider> */}
    </AuthContextProvider>
  </BrowserRouter>
);
