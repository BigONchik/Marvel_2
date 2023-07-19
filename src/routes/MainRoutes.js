import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import PasswordReset from "../components/auth/PasswordReset";
import Register from "../components/auth/Register";
import RegisterSuccess from "../components/auth/RegisterSuccess";
import Favorites from "../components/favorites/Favorites";
// import AddProduct from "../components/product/AddProduct/AddProduct";
// import EditProduct from "../components/product/EditProduct/EditProduct";
import ProductDetails from "../components/product/ProductDetails/ComicsDetails";

import HomePage from "../pages/HomePage/HomePage";
import MoviesList from "../components/product/MoviesList/MoviesList";
import News from "../components/product/News/News";
import ProductList from "../components/product/ProductList/ProductList";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import CharacterDetails from "../components/product/Characters/CharacterDetails/CharacterDetails";
import CharactersList from "../components/product/Characters/CharacterList/CharactersList";
import AddCharacter from "../components/product/Characters/AddCharacter/AddCharacter";
import EditCharacter from "../components/product/Characters/EditCharacter/EditCharacter";
import Cart from "../components/Cart/Cart";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import ComicsDetails from "../components/product/ProductDetails/ComicsDetails";
import EditComics from "../components/product/EditComics/EditComics";
import NewsPage from "../pages/NewsPage/NewsPage";
import ComicsList from "../components/product/Comics/ComicsList/ComicsList";
// import ComicsPage from "../pages/ComicsPage";
import AddComics from "../components/product/AddProduct/AddComics";
import ComicsPage from "../pages/ComicsPage/ComicsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="personal_page" element={<PersonalPage />} />

      {/* ROUTES FOR CHARACTERS START */}
      <Route path="/characters_page" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="/characters" element={<CharactersList />} />
      <Route path="/add_character" element={<AddCharacter />} />
      <Route path="/edit/:id" element={<EditCharacter />} />
      {/* ROUTES FOR CHARACTERS END */}

      <Route path="/add" element={<AddComics />} />
      <Route path="/comics" element={<ComicsList />} />
      <Route path="/comics/detail/:id" element={<ComicsDetails />} />

      <Route path="/characters" element={<CharactersList />} />
      <Route path="/movies" element={<MoviesList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/:id" element={<ComicsDetails />} />
      <Route path="/edit/:id" element={<EditComics />} />

      <Route path="/favorites" element={<Favorites />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/profile" element={<Cart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/news" element={<NewsPage />} />

      <Route path="/comics_page" element={<ComicsPage />} />
      <Route path="/add_comics" element={<AddComics />} />

      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
};

export default MainRoutes;
