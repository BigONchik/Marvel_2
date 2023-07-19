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
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleSave = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("amount_of_pages", amountOfPages);
    formData.append("category", category);

    createProduct(formData);
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
      <Form.Control
        onChange={(e) => setAmountOfPages(e.target.value)}
        placeholder="amountof pages"
        type="text"
      />
      <Form.Control
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        placeholder="amountof pages"
      />

      <Button className="mt-3" onClick={handleSave}>
        Create Product
      </Button>
    </div>
  );
};

export default AddComics;
