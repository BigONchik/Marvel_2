import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContextProvider";
import { useProduct } from "../../../contexts/ProductContextProvider";

const ComicsDetails = () => {
  const {
    oneProduct,
    getOneProduct,
    addReview,
    deleteReview,
    saveEditedReview,
  } = useProduct();
  const { currentUser } = useAuth();

  const [text, setText] = useState("");
  const [commentToEdit, setCommentToEdit] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = { text, comics: id };
    addReview(newReview);
    getOneProduct(id);
    setText("");
  };

  const handleChange = (e) => {
    setCommentToEdit({ ...commentToEdit, text: e.target.value });
  };

  const handleSave = () => {
    const editedReview = {
      text: commentToEdit.text,
      comics: commentToEdit.product,
    };
    saveEditedReview(editedReview, commentToEdit.id);
    setCommentToEdit(null);
  };

  return (
    <div>
      <img width={500} src={oneProduct?.image} alt="" />
      <h3>{oneProduct?.name}</h3>
      <h3>{oneProduct?.author}</h3>
      <p>{oneProduct?.category.title}</p>
      <p>{oneProduct?.price} $</p>
      <p>{oneProduct?.description}</p>
      <Button variant={oneProduct?.favorite_by_user ? "success" : "secondary"}>
        {oneProduct?.favorite_by_user
          ? "Remove from favorites"
          : "Add to Favorites"}
      </Button>
      <form onSubmit={handleAddReview}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-75"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>add review</button>
      </form>

      <div>
        {oneProduct?.reviews?.map((item) => (
          <div key={item.id} className="border m-4">
            <h5>{item.author}</h5>
            {commentToEdit && commentToEdit.id === item.id ? (
              <>
                <input onChange={handleChange} value={commentToEdit.text} />
                <button onClick={() => setCommentToEdit(null)}>cancel</button>
                <button onClick={handleSave}>save review</button>
              </>
            ) : (
              <p>
                {item.text}{" "}
                <span style={{ fontSize: "10px", color: "lightgrey" }}>
                  {moment(item.created_at).format("DD/MM/YYYY HH:mm:ss")}
                </span>
              </p>
            )}

            {item.author === currentUser ? (
              <div>
                <button onClick={() => setCommentToEdit(item)}>edit</button>
                <button onClick={() => deleteReview(item.id, id)}>
                  delete
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicsDetails;
