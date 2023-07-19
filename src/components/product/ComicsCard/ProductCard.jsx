import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

function ComicsCard({ item }) {
  const { deleteComics, toggleFavorites, deleteFromFavorites } = useProduct();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/comics/detail/${item.id}`)}
        >
          {item.name}
        </Card.Title>
        <Card.Text>{item.price} $</Card.Text>\
        <Button variant="primary" onClick={() => deleteComics(item.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ComicsCard;
