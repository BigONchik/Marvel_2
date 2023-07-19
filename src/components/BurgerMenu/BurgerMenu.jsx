import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import burgerMenuIcon from "../../assets/burger-menu.png";
import "./BurgerMenu.css"

function BurgerMenu() {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <img src={burgerMenuIcon} alt="" />
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-menu">
        <Dropdown.Item id="dropdown-menu-item" href="#/action-news">NEWS</Dropdown.Item>
        <Dropdown.Item id="dropdown-menu-item" href="#/action-comics">COMICS</Dropdown.Item>
        <Dropdown.Item id="dropdown-menu-item" onClick={() => navigate("characters_page")}>
          CHARACTERS
        </Dropdown.Item>
        <Dropdown.Item id="dropdown-menu-item" href="#/action-movies">MOVIES</Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item id="dropdown-menu-item" onClick={() => navigate("/login")}>
          SIGN IN
        </Dropdown.Item>
        <Dropdown.Item id="dropdown-menu-item" onClick={() => navigate("/register")}>
          JOIN
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BurgerMenu
