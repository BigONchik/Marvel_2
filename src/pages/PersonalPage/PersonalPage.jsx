import React from "react";
import "./PersonalPage.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";
const PersonalPage = () => {
  const navigate = useNavigate();
  const { currentUser, logout, checkAuth } = useAuth();
  return (
    <div className="PersonalPage">
      <div className="personalPage__info">
        <p>User Name</p>
        <input type="text" value={currentUser.userName} />
        <p>E-mail</p>
        <input type="text" value={currentUser.email} />
        <p>First Name</p>
        <input type="text" value={currentUser.firstName} />
        <p>Last Name</p>
        <input type="text" value={currentUser.lastName} />
      </div>
      <div className="personalPage__buttons">
        {currentUser.email === ADMIN ? (
          <span className="personal__buttonsForAdmin">
            <button onClick={() => navigate("/add_character")}>
              ADD CHARACTER
            </button>
            <button>ADD COMICS</button>
            <button>ADD MOVIES</button>
          </span>
        ) : (
          <span className="personal__buttonsForUsers">
            <button>Cart</button>
            <button>My favourites</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default PersonalPage;
