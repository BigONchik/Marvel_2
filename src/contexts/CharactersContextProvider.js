import axios from 'axios';
import React, { createContext, useContext, useReducer,} from 'react'
import { useNavigate } from 'react-router-dom';
import {ACTIONS, API} from '../helpers/consts';
// import { getTokens } from '../helpers/functions';

export const charactersContext = createContext()
export const useCharacters = () => useContext(charactersContext);

const INIT_STATE = {
  characters:[],
  characterDetails:null
}
function reducer (state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET__CHARACTERS:
        return{
            ...state,
            characters: action.payload
        }
        case ACTIONS.GET__CHARACTER_DETAILS:
          return{
              ...state,
              characterDetails: action.payload
          }
    default:
        break;
  }
}
const CharactersContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,INIT_STATE)
    const navigate = useNavigate()
    
    // ! POST REQUEST (CREATE)
    const addCharacter = async (newCharacter) =>{
        await axios.post(API,newCharacter)
        navigate("/characters")
    }

    // ! GET REQUEST (READ) 
    const getCharacters = async()=>{
        const{data} = await axios.get(`${API}${window.location.search}`)
        dispatch({type:ACTIONS.GET__CHARACTERS, payload:data})
    };

    // ! PATCH REQUEST (UPDATE)
    const saveUpdatedCharacters = async (editedCharacter) => {
      await axios.patch(`${API}/${editedCharacter.id}`, editedCharacter)
      navigate("/characters");
    }

    // ! DELETE REQUEST (DELETE)
    const deleteCharacter = async (id)=>{
      await axios.delete(`${API}/${id}`)
      navigate("/characters")
    }

    // ! GET ONE CHARACTER INFO
    const getCharacterDetails = async(id)=>{
      const {data} = await axios.get(`${API}/${id}`)
      console.log(state.characterDetails);
      dispatch({type:ACTIONS.GET__CHARACTER_DETAILS, payload:data})
    }

    const values = {
    addCharacter,
    getCharacters,  
    characters:state.characters , 
    deleteCharacter,
    saveUpdatedCharacters,
    getCharacterDetails,
    characterDetails:state.characterDetails,

    }
  return (
    <charactersContext.Provider value={values}>{children}</charactersContext.Provider>
  )
}

export default CharactersContextProvider