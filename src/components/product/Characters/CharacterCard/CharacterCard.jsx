import React from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div className="character__card" 
    onClick={() => navigate(`/character/${character.id}`)}
    >
      <div className="image-container">
        <img src={character?.image1} alt="" />
      </div>
      <h3>{character?.name}</h3>
      <p>{character?.otherName}</p>
    </div>
  );
};

export default CharacterCard;

