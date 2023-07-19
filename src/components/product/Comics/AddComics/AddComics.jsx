import React, { useState } from "react";
import "./AddComics.css";
import CategorySelect from "../../CategorySelect/CategorySelect";
import { useNavigate } from "react-router-dom";
import { useComics } from "../../../../contexts/ComicsContextProvider";

const AddComics = () => {
  const navigate = useNavigate();
  const [comics, setComics] = useState({
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

  const { addComics } = useComics();

  const handleSave = () => {
    const newComics = new FormData();
    newComics.append("image1", image1);
    newComics.append("image2", image2);
    newComics.append("name", name);
    newComics.append("otherName", otherName);
    newComics.append("description", description);
  };

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
    addComics(comics);
  };
  const handleInp = (e) => {
    let obj = {
      ...comics,
      [e.target.name]: e.target.value,
    };
    setComics(obj);
  };

  return (
    <div className="AddComics">
      <p>ADD Comics</p>
      <div className="addComics__inputs-div">
        <input
          name="image1"
          value={comics.image1}
          onChange={(e) => {
            setImage1(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Image one"
        />
        <input
          name="image2"
          value={comics.image2}
          onChange={(e) => {
            setImage2(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Image two"
        />
        <input
          name="name"
          value={comics.name}
          onChange={(e) => {
            setName(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Name"
        />
        <input
          name="otherName"
          value={comics.otherName}
          onChange={(e) => {
            setOtherName(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Other Name"
        />
        <input
          name="description"
          value={comics.description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleInp(e);
          }}
          type="text"
          placeholder="Description"
        />

        <CategorySelect comics={comics} setComics={setComics} />
      </div>

      <button
        onClick={() => {
          scanInp();
          handleSave();
          navigate("/comics_page");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddComics;
