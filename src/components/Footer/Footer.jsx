import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "darkgrey",
        paddingBottom: "30px",
        paddingTop: "80px",
      }}
    >
      <Box sx={{ display: "flex", width: "50%", padding: "1rem" }}>
        <Box sx={{ width: "50%" }}>
          <img
            style={{ width: "120px" }}
            src="https://yt3.ggpht.com/a/AATXAJwobSjoptnM6YL6lVa6zLSqqglBwlh2ISs_yQ=s900-c-k-c0xffffffff-no-rj-mo"
            alt=""
          />
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            ABOUT MARVEL
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            HELP/FAQS
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            CAREERS
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            INTERNSHIPS
          </a>
        </Box>
        <Box sx={{ width: "50%" }}>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            ADVERTISING
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            DISNEY+
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            MARVELHQ.COM
          </a>
          <a
            href="#"
            style={{
              display: "block",
              background: "none",
              textDecoration: "none",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            REDEEM DIGITAL COMICS
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "50%",
          padding: "1rem",
        }}
      >
        <Box sx={{ marginRight: "1rem" }}>
          <Typography
            variant="h5"
            sx={{ color: "white", marginBottom: "0.5rem", fontSize: "14px" }}
          >
            MARVEL INSIDER
          </Typography>
          <Typography variant="body1" sx={{ color: "white", fontSize: "14px" }}>
            Get Rewarded for Being a Marvel Fan
          </Typography>
        </Box>
        <Box sx={{ marginRight: "1rem" }}>
          <Typography
            variant="h5"
            sx={{ color: "white", marginBottom: "0.5rem", fontSize: "14px" }}
          >
            MARVEL UNLIMITED
          </Typography>
          <Typography variant="body1" sx={{ color: "white", fontSize: "14px" }}>
            Access Over 30,000+ Digital Comics
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "0.5rem", fontSize: "14px" }}
        >
          FOLLOW MARVEL
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
