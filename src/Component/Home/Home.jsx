import React from "react";
import "./Home.css";
import { NavBar } from "../Nav/NavBar";
import fondo from "../../assets/IMG/image-hero.jpg";

export const Home = () => {
  return (
    <div className="home">
      <img src={fondo} alt="fondo" />
      <NavBar />
      <div className="title">
        <h1>Inmersive</h1> <h1>experience</h1> <h1>taht deliver</h1>
      </div>
    </div>
  );
};
