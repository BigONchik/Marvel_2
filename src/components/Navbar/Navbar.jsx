import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#202020",
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "white" }}>
            {currentUser ? (
              <Box>
                <Typography>{currentUser}</Typography>{" "}
                <Button onClick={logout}>LOG OUT</Button>
              </Box>
            ) : (
              <Box>
                <Button onClick={() => navigate("/login")}>SIGN IN</Button>
                <Button onClick={() => navigate("/register")}>| JOIN</Button>
              </Box>
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "55px", height: "45px", marginRight: "40rem" }}
            src="https://yt3.ggpht.com/a/AATXAJwobSjoptnM6YL6lVa6zLSqqglBwlh2ISs_yQ=s900-c-k-c0xffffffff-no-rj-mo
"
            onClick={() => navigate("/")}
            alt=""
          />
          <Box>
            <input
              style={{
                backgroundColor: "#47b8e0",
                border: "1px solid gray",
              }}
              type="text"
              placeholder="поиск"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#202020",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            CHARACTERS
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            COMICS
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            MOVIES
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            TV SHOWS
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            GAMES
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            NEWS
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff", marginRight: "1rem", fontSize: "1rem" }}
          >
            MORE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
