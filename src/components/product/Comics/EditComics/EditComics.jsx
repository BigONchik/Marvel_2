import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditComics.css";
import CategorySelect from "../../CategorySelect/CategorySelect";
import { useComics } from "../../../../contexts/ComicsContextProvider";

const EditComics = () => {
  const naigate = useNavigate();
  const [comics, setComics] = useState({
    image1: "",
    image2: "",
    name: "",
    otherName: "",
    description: "",
  });

  const { saveUpdatedComics, getComicsDetails, comicsDetails } = useComics();
  const { id } = useParams();

  useEffect(() => {
    getComicsDetails(id);
  }, []);

  useEffect(() => {
    if (comicsDetails) {
      setComics(comicsDetails);
    }
  }, [comicsDetails]);

  const scanInp = () => {
    if (
      !comics.image1.trim() ||
      !comics.image2.trim() ||
      !comics.name.trim() ||
      !comics.description.trim()
    ) {
      alert("Fill all the inputs");
      return;
    }
    saveUpdatedComics(comics);
  };
  const handleInp = (e) => {
    let obj = {
      ...comics,
      [e.target.name]: e.target.value,
    };
    setComics(obj);
  };

  return (
    <div className="EditComics">
      <p>EDIT comics INFORMATION</p>
      <div className="editChomics__inputs-div">
        <input
          name="image1"
          value={comics.image1}
          onChange={handleInp}
          type="text"
          placeholder="Image one"
        />
        <input
          name="image2"
          value={comics.image2}
          onChange={handleInp}
          type="text"
          placeholder="Image two"
        />
        <input
          name="name"
          value={comics.name}
          onChange={handleInp}
          type="text"
          placeholder="Name"
        />
        <input
          name="otherName"
          value={comics.otherName}
          onChange={handleInp}
          type="text"
          placeholder="Other Name"
        />
        <input
          name="description"
          value={comics.description}
          onChange={handleInp}
          type="text"
          placeholder="Description"
        />
        <CategorySelect comics={comics} setComics={setComics} />
      </div>

      <div className="editComics__button-div">
        <button onClick={scanInp}>EDIT</button>
        <button onClick={() => naigate("/comics")}>Cansel</button>
      </div>
    </div>
  );
};

export default EditComics;
