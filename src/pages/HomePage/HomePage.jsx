import React from "react";
import "./HomePage.css";
import Carousel, { slideImages } from "../../components/Carousel/Carousel";

import nickFury from "../../assets/nick fury.jpg";
import secretInvTitle from "../../assets/secret_invasion_title.png";
import secretInvRelated1 from "../../assets/secret_invasion_1.jpg";
import secretInvRelated2 from "../../assets/secret-invasion_2.webp";
import secretInvRelated3 from "../../assets/secret_invasion_3.png";
import secretInvRelated4 from "../../assets/secret_invasion_4.png";

import marvelComics from "../../assets/marvelComics.jpeg";
import marvelUnlim from "../../assets/marvel imgUnlimited.png";

import marvelInsider from "../../assets/marvel insider.jpg";
import { useMediaQuery } from "@mui/material";

const HomePage = () => {
  const maxWidth768 = useMediaQuery("(max-width:768px)");
  return (
    <div className="homepage">
      <Carousel images={slideImages} />

      <div className="hp__secretInvasion">
        <div className="hp__secretInvasion_black">
          <div className="hp__secretInvasion_inner">
            {" "}
            <img src={secretInvTitle} alt="" srcset="" />
            <p>
              Who do you trust? Marvel Studios’ Secret Invasion, an Original
              series, is streaming June 21 on Disney+.
            </p>
            <a href="https://www.marvel.com/tv-shows/secret-invasion/1">
              <button>LEARN MORE</button>{" "}
            </a>
          </div>
        </div>
        <img src={nickFury} alt="" srcset="" className="nickFury_img" />
      </div>
      <div className="hp__secretInvasion_related">
        <span>
          <span className="hp__sI_rel hp__sI_rel1">
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-samuel-jackson-nick-fury-skrullmance">
              <img src={secretInvRelated1} alt="" srcset="" />
            </a>
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-samuel-jackson-nick-fury-skrullmance">
              'Secret Invasion': Samuel L. Jackson on Nick Fury's Skrullmance
            </a>
          </span>
          <span className="hp__sI_rel hp__sI_rel2">
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-don-cheadle-kevin-feige-rhodey-skrull">
              <img src={secretInvRelated2} alt="" srcset="" />
            </a>
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-don-cheadle-kevin-feige-rhodey-skrull">
              'Secret Invasion': Explore New Posters from the Series
            </a>
          </span>

          <span className="hp__sI_rel hp__sI_rel3">
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-samuel-jackson-nick-fury-disney-plus">
              <img src={secretInvRelated3} alt="" srcset="" />
            </a>
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-samuel-jackson-nick-fury-disney-plus">
              'Secret Invasion': Samuel L. Jackson Talks Nick Fury's Stepping
              Out of the Shadows
            </a>
          </span>
          {!maxWidth768 ? (
            <span className="hp__sI_rel hp__sI_rel4">
              <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-cobie-smulders-maria-hill">
                <img src={secretInvRelated4} alt="" srcset="" />
              </a>
              <p>TV SHOWS</p>
              <a href="https://www.marvel.com/articles/tv-shows/secret-invasion-cobie-smulders-maria-hill">
                'Secret Invasion': Cobie Smulders Reflects on Maria Hill's MCU
                Journey
              </a>
            </span>
          ) : null}
        </span>
      </div>

      <div className="hp__newComics">
        <div className="hp__comics_black">
          <div className="hp__comics_inner">
            {" "}
            <img src={marvelUnlim} alt="" srcset="" />
            <p>Available Now</p>
            <p>new on marvel unlimited</p>
            <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
            <a href="https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home">
              <button>Get Marvel Unlimited</button>{" "}
            </a>
          </div>
        </div>
        <img src={marvelComics} alt="" srcset="" className="marvelComics_img" />
      </div>

      <div className="hp__comics_related">
        <span>
          <span className="hp__comics_rel hp__comics_rel1">
            <img src={secretInvRelated1} alt="" srcset="" />
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home">
              'Secret Invasion': Samuel L. Jackson on Nick Fury's Skrullmance
            </a>
          </span>
          <span className="hp__comics_rel hp__comics_rel2">
            <img src={secretInvRelated2} alt="" srcset="" />
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home">
              'Secret Invasion': Explore New Posters from the Series
            </a>
          </span>

          <span className="hp__comics_rel hp__comics_rel3">
            <img src={secretInvRelated3} alt="" srcset="" />
            <p>TV SHOWS</p>
            <a href="https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home">
              'Secret Invasion': Samuel L. Jackson Talks Nick Fury's Stepping
              Out of the Shadows
            </a>
          </span>
          {!maxWidth768 ? (
            <span className="hp__comics_rel hp__comics_rel4">
              <img src={secretInvRelated4} alt="" srcset="" />
              <p>TV SHOWS</p>
              <a href="https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home">
                'Secret Invasion': Cobie Smulders Reflects on Maria Hill's MCU
                Journey
              </a>
            </span>
          ) : null}
        </span>
      </div>

      <div className="hp__marvelInsider">
        <img src={marvelInsider} alt="" srcset="" />

        <a href="https://www.marvel.com/insider?cid=dcom_promomodule_20210319_insider_home">
          <div className="hp__marvelInsider_right">
            <p>Marvel Insider</p>
            <p>Watch, Earn, Redeem!</p>
            <p>Get rewarded for doing what you already do as a fan.</p>
            <button>JOIN NOW</button> <p>Terms and Conditions Apply.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
