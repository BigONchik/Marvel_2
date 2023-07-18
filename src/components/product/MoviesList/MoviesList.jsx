import React from "react";
import { Button } from "react-bootstrap";

const MoviesList = () => {
  return (
    <div>
      <div className="masthead__wrapper">
        <div className="masthead__background__wrapper">
          <figure className="img__wrapper masthead__background">
            <div
              className="built__background built__background--multi use-vars"
              style={{
                position: "relative",
                height: "400px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img
                src="https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol3_lob_mas_min_dsk_01.jpg"
                alt=""
                style={{
                  transform: "translateX(-10%)",
                  height: "350px",
                  width: "127%",
                  zIndex: "0",
                }}
              />
              <div
                className="built__background-overlay"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  opacity: "0.8",
                  zIndex: "1",
                }}
              ></div>
              <span
                className="masthead__headline"
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "44px",
                  color: "white",
                  zIndex: "2",
                  fontWeight: "bold",
                }}
              >
                MOVIES
              </span>
              <div
                className="masthead__copy"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "16px",
                  color: "white",
                  zIndex: "2",
                  fontWeight: "bold",
                }}
              >
                Journey into the cosmic depths of the mighty Marvel Cinematic
                Universe!
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div className="card" style={{ height: "500px" }}></div>
      <>
        <div className="masthead__hero">
          <a href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-MultiCharacter-EN-HomeScreenHero-MAS4Movies_ETRSHCBLW-NA"></a>

          <div className="masthead__background__wrapper">
            <figure className="img__wrapper masthead__background">
              <div
                className="built__background built__background--multi use-vars"
                style={{
                  position: "relative",
                  height: "460px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://cdn.marvel.com/content/1x/dplus_lob_mas_dsk_05.jpg"
                  alt=""
                  width={"100%"}
                  style={{
                    height: "460px",
                    zIndex: "0",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="built__background-overlay"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    opacity: "0.8",
                    zIndex: "1",
                  }}
                  onClick={() => {
                    window.location.href =
                      "https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-MultiCharacter-EN-HomeScreenHero-MAS4Movies_ETRSHCBLW-NA"; // Замените ссылку на нужную
                  }}
                ></div>
                <span
                  className="masthead__headline"
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "27%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "44px",
                    color: "white",
                    zIndex: "2",
                    fontWeight: "bold",
                  }}
                >
                  A Universe of Super Heroes
                </span>
                <div
                  className="masthead__copy"
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "22%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "white",
                    zIndex: "2",
                  }}
                >
                  All Your Favorite Stories and More. Start Streaming Now.
                </div>
              </div>
            </figure>
            <figure className="img__wrapper masthead__logo">
              <img
                src="https://cdn.marvel.com/content/1x/disneyplus_lob_log_eye_01.png"
                alt=""
                style={{
                  position: "absolute",
                  top: "175%",
                  left: "14%",
                  transform: "translate(-50%, -50%)",
                  maxHeight: "293px",
                  zIndex: "2",
                }}
              />

              <Button
                variant="danger"
                style={{
                  width: "12%",
                  height: "50px",
                  position: "absolute",
                  top: "200%",
                  left: "14%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "2",
                }}
              >
                STREAM NOW
              </Button>
            </figure>
          </div>
        </div>
      </>
    </div>
  );
};

export default MoviesList;
