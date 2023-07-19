import React, { useEffect, useState } from "react";
import "./Navbar.css";
import marvelLogo from "../../assets/marveLogo.png";
import searchIcon from "../../assets/search-icon.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useMediaQuery } from "@mui/material";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout, checkAuth } = useAuth();
  const maxWidth768 = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  const [activeItem, setActiveItem] = useState("");
  const [notActiveItems, setNotActiveItems] = useState("");

  const handleItemHover = (item) => {
    setActiveItem(item);
    setNotActiveItems(item);
  };

  return (
    <div className="Navbar-container">
      <div className="navbar">
        <div className="navbar-row1">
          {!maxWidth768 ?(
            <div className="navbar-auth">
              {currentUser ? (
                <div className="navbar__log-out">
                  <p onClick={() => navigate("/personal_page")}>
                    {currentUser}
                  </p>
                  <button onClick={logout}>Log Out</button>
                </div>
              ) : (
                <div className="navbar__sign-in">
                  <button onClick={() => navigate("/login")}>SIGN IN</button>
                  <button onClick={() => navigate("/register")}>JOIN</button>
                </div>
              )}
            </div>
          ):(<BurgerMenu/>)}
          <div className="navbar__img">
            <img src={marvelLogo} alt="" onClick={() => navigate("/")} />
          </div>
          <div className="navbar__search">
            <img src={searchIcon} alt="" />
          </div>
        </div>
        {<BurgerMenu/> && maxWidth768 ? (null):(<div className="navbar-row2">
          <p
            className={activeItem === "NEWS" ? "active" : ""}
            onMouseOver={() => handleItemHover("NEWS")}
            onClick={() => navigate("/news")}
          >
            NEWS
          </p>
          <p
            className={activeItem === "COMICS" ? "active" : ""}
            onMouseOver={() => handleItemHover("COMICS")}
            onClick={() => navigate("/comics")}
          >
            COMICS
          </p>
          <p
            className={activeItem === "CHARACTERS" ? "active" : ""}
            onMouseOver={() => handleItemHover("CHARACTERS")}
            onClick={() => navigate("/characters_page")}
          >
            CHARACTERS
          </p>
          <p
            className={activeItem === "MOVIES" ? "active" : ""}
            onMouseOver={() => handleItemHover("MOVIES")}
            onClick={() => navigate("/movies")}
          >
            MOVIES
          </p>
        </div>)}
        
      </div>
    </div>
  );
};

export default Navbar;
