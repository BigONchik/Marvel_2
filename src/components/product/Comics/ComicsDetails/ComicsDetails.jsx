import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import "./ComicsDetails.css";

const CharacterDetails = () => {
  const { deleteCharacter, getCharacterDetails, characterDetails } =
    useCharacters();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterDetails(id);
  }, []);

  return (
    <div className="CharacterDetails">
      <div className="CharacterDetails__left">
        <img src={characterDetails?.image2} alt={characterDetails?.name} />
        {/* FOR ADMIN */}
      </div>
      <div className="CharacterDetails__right">
        <h2>{characterDetails?.name}</h2>
        <p>{characterDetails?.description}</p>
        <button>READ PROFILE</button>
        <span className="d-flex">
          <button onClick={() => deleteCharacter(characterDetails?.id)}>
            DELETE
          </button>
          <button onClick={() => navigate(`/edit/${characterDetails?.id}`)}>
            UPDATE
          </button>
        </span>
      </div>
      </div>
  );
};

export default CharacterDetails;
