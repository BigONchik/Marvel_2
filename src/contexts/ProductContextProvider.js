import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
import { getTokens } from "../helpers/functions";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);


const INIT_STATE = {
  product: [],
  pages: 0,
  categories: [],
  oneProduct: null,
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload.results,
        pages: Math.ceil(action.payload.count / 6),
      };

    case "CREATE_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

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

  async function getProducts() {
    try {
      const res = await axios(
        `${API}/comics/${window.location.search}`,
        getTokens()
      );
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function createCategory(categoryData) {
    try {
      const res = await axios.post(
        `${API}/categories/create-list`,
        categoryData,
        getTokens()
      );
      dispatch({ type: "CREATE_CATEGORY", payload: res.data });
      console.log("Категория успешно создана:", res.data);
    } catch (error) {
      console.error("Ошибка при создании категории:", error);
    }
  }

  async function getCategories() {
    try {
      const res = await axios(`${API}/category/create-list/`);
      dispatch({ type: "GET_CATEGORIES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(`${API}/comics/create/`, newProduct, getTokens());
      navigate("/comics");
    } catch (error) {
      console.log(error);
    }
    console.log(newProduct.data);
  }

  async function deleteComics(id) {
    try {
      await axios.delete(`${API}/comics/delete/${id}/`, getTokens());
      getProducts();
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

  async function updateProduct(id, editedComics) {
    try {
      await axios.patch(
        `${API}/comics/update/${id}/`,
        editedComics,
        getTokens()
      );
      navigate("/comics");
    } catch (error) {
      console.log(error);
    }
  }

  // async function toggleFavorites(id) {
  //   try {
  //     await axios(`${API}/products/${id}/toggle_favorites/`, getTokens());
  //     getProduct();
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
    getProducts,
    product: state.product,
    pages: state.pages,
    categories: state.categories,
    createCategory,
    getCategories,
    createProduct,
    deleteComics,

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