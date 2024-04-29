import React from "react";
import "./Creation.css";
import eart from "../../assets/IMG/image-deep-earth.jpg";
import arcade from "../../assets/IMG/image-night-arcade.jpg";
import soccer from "../../assets/IMG/image-soccer-team.jpg";
import grid from "../../assets/IMG/image-grid.jpg";
import above from "../../assets/IMG/image-from-above.jpg";
import pocket from "../../assets/IMG/image-pocket-borealis.jpg";
import curiosity from "../../assets/IMG/image-curiosity.jpg";
import fisheye from "../../assets/IMG/image-fisheye.jpg";

export const Creations = () => {
  return (
    <div className="our">
      <div className="more">
        <h1>Our creations</h1>
        <button>See all</button>
      </div>
      <div className="seccion">
        <img src={eart} alt="deep eart"/>
        <img src={arcade} alt="night arcade"/>
        <img src={soccer} alt="soccer team vr "/>
        <img src={grid} alt="the grid"/>
        <img src={above} alt="from uo above"/>
        <img src={pocket} alt="pocket above"/>
        <img src={curiosity} alt="the curiosity"/>
        <img src={fisheye} alt="make it fisheye"/>
      </div>
    </div>
  );
};
