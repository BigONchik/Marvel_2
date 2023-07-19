import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import PasswordReset from "../components/auth/PasswordReset";
import Register from "../components/auth/Register";
import RegisterSuccess from "../components/auth/RegisterSuccess";
import Favorites from "../components/favorites/Favorites";

import HomePage from "../pages/HomePage/HomePage";

import MoviesList from "../components/product/MoviesList/MoviesList";
import CharactersList from "../components/product/Characters/CharactersList";
import News from "../components/product/News/News";
import Cart from "../components/Cart/Cart";
import AddComics from "../components/product/AddProduct/AddComics";
import ComicsDetails from "../components/product/ProductDetails/ComicsDetails";
import EditComics from "../components/product/EditComics/EditComics";
import ComicsList from "../components/product/Comics/ComicsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/password-reset" element={<PasswordReset />} />

      <Route path="/add" element={<AddComics />} />
      <Route path="/news" element={<News />} />
      <Route path="/comics" element={<ComicsList />} />
      <Route path="/comics/detail/:id" element={<ComicsDetails />} />

      <Route path="/characters" element={<CharactersList />} />
      <Route path="/movies" element={<MoviesList />} />
      <Route path="/products/:id" element={<ComicsDetails />} />
      <Route path="/edit/:id" element={<EditComics />} />

      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Cart />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
};

export default MainRoutes;
