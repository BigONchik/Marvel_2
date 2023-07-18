import React, { useState } from "react";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import "./AddCharacter.css";
import CategorySelect from "../../CategorySelect/CategorySelect";

const AddCharacter = () => {
  const [character, setCharacter] = useState({
    image1: "",
    image2: "",
    name: "",
    otherName: "",
    description: "",
  });

  const { addCharacter } = useCharacters();

  const scanInp = () => {
    if (
      !character.image1.trim() ||
      !character.image2.trim() ||
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
    <div className="AddCharacter">
      <p>ADD CHARACTER</p>
      <div className="addCharacter__inputs-div">
        <input
          name="image1"
          value={character.image1}
          onChange={handleInp}
          type="text"
          placeholder="Image one"
        />
        <input
          name="image2"
          value={character.image2}
          onChange={handleInp}
          type="text"
          placeholder="Image two"
        />
        <input
          name="name"
          value={character.name}
          onChange={handleInp}
          type="text"
          placeholder="Name"
        />
        <input
          name="otherName"
          value={character.otherName}
          onChange={handleInp}
          type="text"
          placeholder="Other Name"
        />
        <input
          name="description"
          value={character.description}
          onChange={handleInp}
          type="text"
          placeholder="Description"
        />
        <CategorySelect character={character} setCharacter={setCharacter} />
      </div>

      <button onClick={scanInp}>ADD</button>
    </div>
  );
};

export default AddCharacter;
