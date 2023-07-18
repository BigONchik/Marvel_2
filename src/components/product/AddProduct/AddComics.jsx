import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useProduct } from "../../../contexts/ProductContextProvider";

const AddComics = () => {
  const { categories, getCategories, createProduct } = useProduct();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [amountOfPages, setAmountOfPages] = useState(0);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleSave = () => {
    const newProduct = {
      name,
      author,
      description,
      amount_of_pages: amountOfPages,
      price,
      category,
    };

    createProduct(newProduct);
    console.log(newProduct);
  };

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
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
      />
      <Form.Control
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="author"
        type="text"
      />
      <Form.Control
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
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

      <Button className="mt-3" onClick={handleSave}>
        Create Product
      </Button>
    </div>
  );
};

export default AddComics;
