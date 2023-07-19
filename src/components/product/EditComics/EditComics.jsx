import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

const EditComics = () => {
  const {
    categories,
    getCategories,
    updateProduct,
    oneProduct,
    getOneProduct,
  } = useProduct();

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.title);
      setAuthor(oneProduct.author);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.id);
    }
  }, [oneProduct]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [amountOfPages, setAmountOfPages] = useState(0);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // const [image, setImage] = useState("");
  const handleSave = () => {
    const newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("author", author);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("amount_of_pages", amountOfPages);
    newProduct.append("category", category);
    // if (image) {
    //   newProduct.append("image", image);
    // }
    updateProduct(id, newProduct);
  };
  return (
    <div className="w-50 mt-5 m-auto">
      <h2>EDIT COMICS</h2>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        placeholder="title"
        type="text"
        value={name}
      />
      <Form.Control
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        value={description}
      />
      <Form.Control
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
        value={price}
      />
      <Form.Select
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Default select example"
        value={category}
      >
        <option>Open this select menu</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </Form.Select>
      {/* <p>IMAGE BEFORE : {oneProduct ? oneProduct.image : "image is empty"}</p>
      <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} /> */}

      <Button className="mt-3" onClick={handleSave}>
        save changes
      </Button>
    </div>
  );
};

export default EditComics;