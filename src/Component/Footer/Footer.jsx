import React from "react";
import facebook from "../../assets/SVG/icon-facebook.svg";
import instagram from "../../assets/SVG/icon-instagram.svg";
import twitter from "../../assets/SVG/icon-twitter.svg";
import pinterest from "../../assets/SVG/icon-pinterest.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="profile">
        <h2>loopstudio</h2>
        <div className="networks">
        <img src={facebook} alt="Not found" />
        <img src={instagram} alt="Not found" />
        <img src={twitter} alt="Not found" />
        <img src={pinterest} alt="Not found" />
        </div>
      </div>
      <div className="data">
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Carrers</a>
            </li>
            <li>
              <a>Sobre nosotros</a>
            </li>
            <li>
              <a>Test Online</a>
            </li>
          </ul>
        <p>202|Loopstudio. All rights reserved</p>
      </div>
    </div>
  );
};
