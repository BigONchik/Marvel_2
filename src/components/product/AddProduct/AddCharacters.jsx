import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useProduct } from "../../../contexts/ProductContextProvider";

const AddCharacters = () => {
  const { categories, getCategories, createCharacters } = useProduct();

  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [biography, setBiography] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleSave = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("short_description", shortDescription);
    formData.append("biography", biography);
    formData.append("category", category);

    createCharacters(formData);
  };
  console.log(image);
  console.log(categories);

  return (
    <div className="w-50 mt-5 m-auto">
      <h2>CREATE PRODUCT</h2>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        type="text"
      />
      <Form.Control
        onChange={(e) => setShortDescription(e.target.value)}
        placeholder="Short description"
        type="text"
      />
      <Form.Control
        onChange={(e) => setBiography(e.target.value)}
        placeholder="Biography"
        type="text"
      />

      <Form.Select
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Default select example"
      >
        <option>Open this select menu</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </Form.Select>

      <Form.Control
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        placeholder="image"
      />

      <Button className="mt-3" onClick={handleSave}>
        Create Character
      </Button>
    </div>
  );
};

export default AddCharacters;
