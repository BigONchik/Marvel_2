import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import "./EditComics.css";
import CategorySelect from "../../CategorySelect/CategorySelect";


const EditCharacter = () => {
    const naigate = useNavigate()
  const [character, setCharacter] = useState({
    image1: "",
    image2: "",
    name: "",
    otherName: "",
    description: "",
  });


  const { saveUpdatedCharacters, getCharacterDetails, characterDetails } =
    useCharacters();
    const {id} = useParams()

    useEffect(()=>{
        getCharacterDetails(id)
    },[])

    useEffect(()=>{
        if(characterDetails){
            setCharacter(characterDetails)
        }
    },[characterDetails])

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
        saveUpdatedCharacters(character);
      };
  const handleInp = (e) => {
    let obj = {
      ...character,
      [e.target.name]: e.target.value,
    };
    setCharacter(obj);
  };

  return (
    <div className="EditCharacter">
      <p>EDIT CHARACTER INFORMATION</p>
      <div className="editCharacter__inputs-div">
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



      <div className="editCharacter__button-div">
        <button onClick={scanInp} >EDIT</button>
        <button onClick={()=> naigate("/characters")}>Cansel</button>
      </div>
    </div>
  );
};

export default EditCharacter;
