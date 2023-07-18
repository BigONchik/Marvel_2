import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContextProvider";
import { useProduct } from "../../../contexts/ProductContextProvider";

const ComicsDetails = () => {
  const { oneComics, getOneComics, addReview, deleteReview, saveEditedReview } =
    useProduct();
  const { currentUser } = useAuth();

  const [text, setText] = useState("");
  const [commentToEdit, setCommentToEdit] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getOneComics(id);
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = { text, comics: id };
    addReview(newReview);
    getOneComics(id);
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
      <img width={500} src={oneComics?.image} alt="" />
      <h3>{oneComics?.title}</h3>
      <p>{oneComics?.category.title}</p>
      <p>{oneComics?.price} $</p>
      <p>{oneComics?.description}</p>
      <Button variant={oneComics?.favorite_by_user ? "success" : "secondary"}>
        {oneComics?.favorite_by_user
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
        {oneComics?.reviews.map((item) => (
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
