import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../../../../contexts/CharactersContextProvider";
import "./ComicsDetails.css";
import { useComics } from "../../../../contexts/ComicsContextProvider";

const ComicsDetails = () => {
  const { deleteComics, getComcisDetails, comicsDetails } = useComics();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getComicsDetails(id);
  }, []);

  return (
    <div className="ComicsDetails">
      <div className="ComicsDetails__left">
        <img src={comicsDetails?.image2} alt={comicsDetails?.name} />
        {/* FOR ADMIN */}
      </div>
      <div className="ComicsDetails__right">
        <h2>{comicsDetails?.name}</h2>
        <p>{comicsDetails?.description}</p>
        <button>READ PROFILE</button>
        <span className="d-flex">
          <button onClick={() => deleteComics(comicsDetails?.id)}>
            DELETE
          </button>
          <button onClick={() => navigate(`/edit/${comicsDetails?.id}`)}>
            UPDATE
          </button>
        </span>
      </div>
    </div>
  );
};

export default ComicsDetails;
