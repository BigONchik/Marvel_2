import React from "react";
import "./Footer.css";

import Msign from "../../assets/marvel M sign.jpg";
import marvelInsiderLogo from "../../assets/marvel_insider-topnav-logo.png";
import marvelUnlimited from "../../assets/marvel imgUnlimited.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import tumblrIcon from "../../assets/icons8-tumblr-30.png";
import youtubeIcon from "../../assets/youtube-icon.png";
import snapchatIcon from "../../assets/snapchat-icon.png";
import pinteresIcon from "../../assets/pinterest-icon.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="Footer-container">
      <div className="footer">

        <div className="footer__parts1-2 d-flex">
        <div className="footer__img-div">
          <img src={Msign} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="footer__part1">
          <a href="https://www.marvel.com/corporate/about">About Marvel</a>
          <a href="https://help.marvel.com/hc/en-us">Help/FAQS</a>
          <a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">
            Careers
          </a>
          <a href="https://www.marvel.com/corporate/interns">Internships</a>
        </div>

        <div className="footer__part2">
          <a href="https://www.marvel.com/corporate/about">Advertising</a>
          <a href="https://help.marvel.com/hc/en-us">Disney+</a>
          <a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">
            MarvelHQ.com
          </a>
          <a href="https://www.marvel.com/corporate/interns">
            Redeem Digital comics
          </a>
        </div>
        </div>
        <div className="footer__marvelProducts">
        <div className="footer__part3">
          <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer">
            {" "}
            <img src={marvelInsiderLogo} alt="" />
          </a>

          <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer">
            <img src={marvelUnlimited} alt="" />
          </a>
        </div>

        <div className="footer__part4">
          <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer">
            <p>Marvel Insider</p>
          </a>

          <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer">
            <p>Get Rewarded for Being a Marvel Fan</p>
          </a>

          <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer">
            <p>Marvel Ulimited</p>
          </a>

          <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer">
            <p>Access Over 30,000+ Digital Comics</p>
          </a>
        </div>
        </div>
        <div className="footer__part5">
          <p>Follow Marvel</p>
          <span>
            <a href="https://www.facebook.com/Marvel/">
              {" "}
              <img src={facebookIcon} alt="" />
            </a>
            <a href="https://twitter.com/marvel">
              <img src={twitterIcon} alt="" />
            </a>

            <a href="https://www.instagram.com/marvel/">
              <img src={instagramIcon} alt="" />
            </a>

            <a href="https://marvelentertainment.tumblr.com/">
              <img src={tumblrIcon} alt="" />
            </a>

            <a href="https://www.youtube.com/marvel">
              <img src={youtubeIcon} alt="" />
            </a>

            <a href="https://www.snapchat.com/add/marvelhq">
              <img src={snapchatIcon} alt="" />
            </a>

            <a href="https://www.pinterest.com/marvelofficial/">
              <img src={pinteresIcon} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
