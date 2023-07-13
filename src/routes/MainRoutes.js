import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import PasswordReset from "../components/auth/PasswordReset";
import Register from "../components/auth/Register";
import RegisterSuccess from "../components/auth/RegisterSuccess";
import Favorites from "../components/favorites/Favorites";
import AddProduct from "../components/product/AddProduct/AddProduct";
import EditProduct from "../components/product/EditProduct/EditProduct";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";

import ComicsList from "../components/product/Comics/ComicsList";
import HomePage from "../pages/HomePage";

import MoviesList from "../components/product/MoviesList/MoviesList";
import CharactersList from "../components/product/Characters/CharactersList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/password-reset" element={<PasswordReset />} />

      <Route path="/add" element={<AddProduct />} />
      <Route path="/comics" element={<ComicsList />} />
      <Route path="/characters" element={<CharactersList />} />
      <Route path="/movies" element={<MoviesList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
};

export default MainRoutes;
