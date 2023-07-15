import React, { useState } from "react";
import { useCharacters } from "../../../contexts/CharactersContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const [products, setCharacter] = useState({
    image1: "",
    image2: "",
    name: "",
    otherName: "",
    description: "",
  });

  const { addCharacter } = useCharacters();

  const scanInp = () => {
    if (
      !!character.image1.trim() ||
      character.image2.trim() ||
      !character.name.trim() ||
      !character.description.trim()
    ) {
      alert("Fill all the inputs");
      return;
    }
    addCharacter(character);
  };
  const handleInp = (e) => {
    let obj = {
      ...character,
      [e.target.name]: e.target.value,
    };
    setCharacter(obj);
  };

  return (
    <div className="admin">
      <h4 className="admin__title animate__animated animate__rubberBand">
        ADD CHARACTER
      </h4>
      <div className="admin__block animate__animated animate__bounce">
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="image1"
          onChange={handleInp}
          type="text"
          placeholder="Image one"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="image2"
          onChange={handleInp}
          type="text"
          placeholder="Image two"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="name"
          value={character.name}
          onChange={handleInp}
          type="text"
          placeholder="Name"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="otherName"
          onChange={handleInp}
          type="text"
          placeholder="Other Name"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="description"
          onChange={handleInp}
          type="text"
          placeholder="Description"
        />
        {/* 
      <CategorySelect product={product} setProduct={setProduct} />
      <GenderSelect product={product} setProduct={setProduct} /> */}

        <div className="button__div">
          <button
            className="admin__button animate__animated animate__zoomIn"
            onClick={scanInp}
          >
            PUSH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
