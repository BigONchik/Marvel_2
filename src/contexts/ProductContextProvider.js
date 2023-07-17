import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
import { getTokens } from "../helpers/functions";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  // и т.д.
];

const INIT_STATE = {
  comics: [],
  pages: 0,
  categories: [],
  oneProduct: null,
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMICS":
      return {
        ...state,
        comics: action.payload.results,
        pages: Math.ceil(action.payload.count / 6),
      };

    case "GET_CATEGORIES":
      return { ...state, category: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  async function getComics() {
    try {
      const res = await axios(
        `${API}/comics/${window.location.search}`,
        getTokens()
      );
      dispatch({ type: "GET_COMICS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const res = await axios(`${API}/category/create-list/`);
      dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(`${API}/comics/`, newProduct, getTokens());
      navigate("/comics");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/comics/delete/${id}/`, getTokens());
      getComics();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API}/comics/detail/${id}/`, getTokens());
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(
        `${API}/comics/update/${id}/`,
        editedProduct,
        getTokens()
      );
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  // async function toggleFavorites(id) {
  //   try {
  //     await axios(`${API}/products/${id}/toggle_favorites/`, getTokens());
  //     getComics();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getFavorites() {
  //   try {
  //     const res = await axios(`${API}/favorites/`, getTokens());
  //     dispatch({ type: "GET_FAVORITES", payload: res.data.results });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function deleteFromFavorites(id) {
  //   try {
  //     await axios(`${API}/products/${id}/toggle_favorites/`, getTokens());
  //     getFavorites();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function addReview(review) {
  //   try {
  //     await axios.post(`${API}/reviews/`, review, getTokens());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function deleteReview(reviewId, productId) {
  //   try {
  //     await axios.delete(`${API}/reviews/${reviewId}/`, getTokens());
  //     getOneProduct(productId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function saveEditedReview(editedReview, reviewId) {
  //   try {
  //     await axios.patch(
  //       `${API}/reviews/${reviewId}/`,
  //       editedReview,
  //       getTokens()
  //     );
  //     getOneProduct(editedReview.product);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const values = {
    getComics,
    products: state.products,
    pages: state.pages,
    categories: state.categories,
    getCategories,
    createProduct,
    deleteProduct,

    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,

    // toggleFavorites,
    // getFavorites,
    // favorites: state.favorites,
    // deleteFromFavorites,

    // addReview,
    // deleteReview,
    // saveEditedReview,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
