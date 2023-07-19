// import React, { createContext, useContext, useReducer } from "react";
// import { ACTIONS } from "../helpers/consts";
// import { calcSubPrice, calcTotalPrice } from "../helpers/functions";

// export const cartContext = createContext();
// export const useCart = () => useContext(cartContext);

// const INIT_STATE = {
//   cart: JSON.parse(localStorage.getItem("cart")),
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case ACTIONS.GET_CART:
//       return { ...state, cart: action.payload };

//     default:
//       return state;
//   }
// };

// const CartContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   const getCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (!cart) {
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           products: [],
//           totalPrice: 0,
//         })
//       );
//       cart = {
//         products: [],
//         totalPrice: 0,
//       };
//     }

//     dispatch({ type: ACTIONS.GET_CART, payload: cart });
//   };

//   const addProductToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (!cart) {
//       cart = { products: [], totalPrice: 0 };
//     }
//     let newProduct = {
//       item: product,
//       count: 1,
//       subPrice: +product.price,
//     };

//     let productToFind = cart.products.filter(
//       (elem) => elem.item.id === product.id
//     );

//     if (productToFind.length === 0) {
//       cart.products.push(newProduct);
//     } else {
//       cart.products = cart.products.filter(
//         (elem) => elem.item.id !== product.id
//       );
//     }

//     cart.totalPrice = calcTotalPrice(cart.products);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     dispatch({ type: ACTIONS.GET_CART, payload: cart });
//   };

//   const checkProductCart = (id) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     if (cart) {
//       let newCart = cart.products.filter((elem) => elem.item.id === id);
//       return newCart.length > 0 ? true : false;
//     }
//   };

//   const changeProductCount = (count, id) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     cart.products = cart.products.map((product) => {
//       if (product.item.id === id) {
//         product.count = count;
//         product.subPrice = calcSubPrice(product);
//       }
//       return product;
//     });
//     cart.totalPrice = calcTotalPrice(cart.products);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     dispatch({
//       type: ACTIONS.GET_CART,
//       payload: cart,
//     });
//   };

//   const deleteCartProduct = (id) => {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     cart.products = cart.products.filter((elem) => elem.item.id !== id);
//     cart.totalPrice = calcTotalPrice(cart.products);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     dispatch({ type: ACTIONS.GET_CART, payload: cart });
//   };

//   const values = {
//     getCart,
//     addProductToCart,
//     cart: state.cart,
//     checkProductCart,
//     changeProductCount,
//     deleteCartProduct,
//   };
//   return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
// };

// export default CartContextProvider;


import axios from 'axios';
import React, { createContext, useContext, useReducer,} from 'react'
import { useNavigate } from 'react-router-dom';
import {ACTIONS, API1} from '../helpers/consts';
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
        await axios.post(API1,newCharacter)
        navigate("/characters")
    }

    // ! GET REQUEST (READ) 
    const getCharacters = async()=>{
        const{data} = await axios.get(`${API1}${window.location.search}`)
        dispatch({type:ACTIONS.GET__CHARACTERS, payload:data})
    };

    // ! PATCH REQUEST (UPDATE)
    const saveUpdatedCharacters = async (editedCharacter) => {
      await axios.patch(`${API1}/${editedCharacter.id}`, editedCharacter)
      navigate("/characters");
    }

    // ! DELETE REQUEST (DELETE)
    const deleteCharacter = async (id)=>{
      await axios.delete(`${API1}/${id}`)
      navigate("/characters")
    }

    // ! GET ONE CHARACTER INFO
    const getCharacterDetails = async(id)=>{
      const {data} = await axios.get(`${API1}/${id}`)
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
