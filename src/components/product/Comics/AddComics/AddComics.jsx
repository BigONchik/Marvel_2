import React, { useState } from "react";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import "./AddComics.css";
import CategorySelect from "../../CategorySelect/CategorySelect";
import { useNavigate } from "react-router-dom";

const AddComics= () => {
  const navigate = useNavigate()
  const [character, setCharacter] = useState({
    image1: "",
    image2: "",
    name: "",
    otherName: "",
    description: "",
  });

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [name, setName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [description, setDescription] = useState("");

  const { addCharacter } = useCharacters();

  const handleSave = () => {
    const newCharacter = new FormData();
    newCharacter.append("image1", image1);
    newCharacter.append("image2", image2);
    newCharacter.append("name", name);
    newCharacter.append("otherName", otherName);
    newCharacter.append("description", description);
  };

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
          onChange={(e) => {
            setImage1(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Image one"
        />
        <input
          name="image2"
          value={character.image2}
          onChange={(e) => {
            setImage2(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Image two"
        />
        <input
          name="name"
          value={character.name}
          onChange={(e) => {
            setName(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Name"
        />
        <input
          name="otherName"
          value={character.otherName}
          onChange={(e) => {
            setOtherName(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Other Name"
        />
        <input
          name="description"
          value={character.description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Description"
        />

        <CategorySelect character={character} setCharacter={setCharacter} />
      </div>

      <button
        onClick={() => {
          scanInp();
          handleSave();
          navigate("/characters_page")
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddComics;
