import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Button, Container } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#202020",
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Container className="d-flex">
          <p style={{ color: "white" }}>
            {currentUser ? (
              <Container>
                <p style={{ color: "white" }}>{currentUser}</p>{" "}
                <Button onClick={logout}>LOG OUT</Button>
              </Container>
            ) : (
              <Container style={{ display: "flex" }}>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  onClick={() => navigate("/login")}
                >
                  SIGN IN
                </Button>
                <p style={{ color: "white", marginTop: "8%" }}>|</p>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  onClick={() => navigate("/register")}
                >
                  JOIN
                </Button>
              </Container>
            )}
          </p>
        </Container>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "55px", height: "45px", marginRight: "40rem" }}
            src="https://yt3.ggpht.com/a/AATXAJwobSjoptnM6YL6lVa6zLSqqglBwlh2ISs_yQ=s900-c-k-c0xffffffff-no-rj-mo"
            onClick={() => navigate("/")}
            alt=""
          />
          <Container>
            <input
              style={{
                backgroundColor: "#47b8e0",
                border: "1px solid gray",
              }}
              type="text"
              placeholder="поиск"
            />
          </Container>
        </Container>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#202020",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Container>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
            onClick={() => navigate("/characters")}
          >
            CHARACTERS
          </Button>
          <Button
            onClick={() => navigate("/comics")}
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            COMICS
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
            onClick={() => navigate("/movies")}
          >
            MOVIES
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            TV SHOWS
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            GAMES
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            NEWS
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            MORE
          </Button>
          {currentUser && currentUser.email === "admin@admin.com" && (
            <Button
              variant="danger"
              style={{ color: "white" }}
              onClick={() => navigate("/add")}
            >
              ADD
            </Button>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
