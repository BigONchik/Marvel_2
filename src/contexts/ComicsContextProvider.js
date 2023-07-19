import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API1 } from "../helpers/consts";

export const comicsContext = createContext();
export const useComics = () => useContext(comicsContext);

const INIT_STATE = {
  comics: [],
  comicsDetails: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET__COMICS:
      return {
        ...state,
        comics: action.payload,
      };
    case ACTIONS.GET__COMICS_DETAILS:
      return {
        ...state,
        comicsDetails: action.payload,
      };
    default:
      break;
  }
}
const ComicsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  // ! POST REQUEST (CREATE)
  const addComics = async (newComics) => {
    await axios.post(API1, newComics);
    navigate("/comics");
  };

  // ! GET REQUEST (READ)
  const getComics = async () => {
    const { data } = await axios.get(`${API1}${window.location.search}`);
    dispatch({ type: ACTIONS.GET__COMICS, payload: data });
  };

  // ! PATCH REQUEST (UPDATE)
  const saveUpdatedComics = async (editedComics) => {
    await axios.patch(`${API1}/${editedComics.id}`, editedComics);
    navigate("/comics");
  };

  // ! DELETE REQUEST (DELETE)
  const deleteComics = async (id) => {
    await axios.delete(`${API1}/${id}`);
    navigate("/comics/");
  };

  // ! GET ONE comics INFO
  const getComicsDetails = async (id) => {
    const { data } = await axios.get(`${API1}/${id}`);
    console.log(state.comicsDetails);
    dispatch({ type: ACTIONS.GET__COMICS_DETAILS, payload: data });
  };

  const values = {
    addComics,
    getComics,
    comics: state.comics,
    deleteComics,
    saveUpdatedComics,
    getComicsDetails,
    comicsDetails: state.comicsDetails,
  };
  return (
    <comicsContext.Provider value={values}>{children}</comicsContext.Provider>
  );
};

export default ComicsContextProvider;
