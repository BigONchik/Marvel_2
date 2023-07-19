import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API, API1 } from "../helpers/consts";
import { getTokens } from "../helpers/functions";
// import { getTokens } from '../helpers/functions';

export const charactersContext = createContext();
export const useCharacters = () => useContext(charactersContext);

const INIT_STATE = {
  characters: [],
  characterDetails: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET__CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case ACTIONS.GET__CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
      };
    default:
      break;
  }
}
const CharactersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  // ! POST REQUEST (CREATE)
  const addCharacter = async (newCharacter) => {
    try {
      await axios.post(`${API}/characters/create/`, newCharacter, getTokens());
      navigate("/characters");
    } catch (error) {
      console.log(error);
    }
  };

  // ! GET REQUEST (READ)
  const getCharacters = async () => {
    try {
      const { data } = await axios.get(
        `${API1}/characters/list${window.location.search}`,
        getTokens()
      );
      dispatch({ type: ACTIONS.GET__CHARACTERS, payload: data });
    } catch (error) {
      console.error();
    }
  };

  // ! PATCH REQUEST (UPDATE)
  const saveUpdatedCharacters = async (id, editedCharacter) => {
    try {
      await axios.patch(
        `${API1}/characters/update/${id}`,
        editedCharacter,
        getTokens()
      );
      navigate("/characters");
    } catch (error) {
      console.log(error);
    }
  };

  // ! DELETE REQUEST (DELETE)
  const deleteCharacter = async (id) => {
    try {
      await axios.delete(`${API1}/characters/${id}`, getTokens);
      getCharacters();
      navigate("/characters");
    } catch (error) {
      console.log(error);
    }
  };

  // ! GET ONE CHARACTER INFO
  const getCharacterDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `${API1}/characters/detail/${id}`,
        getTokens()
      );
      console.log(state.characterDetails);
      dispatch({ type: ACTIONS.GET__CHARACTER_DETAILS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    addCharacter,
    getCharacters,
    characters: state.characters,
    deleteCharacter,
    saveUpdatedCharacters,
    getCharacterDetails,
    characterDetails: state.characterDetails,
  };
  return (
    <charactersContext.Provider value={values}>
      {children}
    </charactersContext.Provider>
  );
};

export default CharactersContextProvider;
