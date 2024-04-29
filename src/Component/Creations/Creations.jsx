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
        <div className="image-container">
        <img src={eart} alt="deep eart" />
        <div className="texto">
            <p>Deep eart</p>
        </div>
        </div>
        <div className="image-container">
        <img src={arcade} alt="night arcade"/>
        <div className="texto">
            <p>Night arcade</p>
        </div>
        </div>
        <div className="image-container">
        <img src={soccer} alt="soccer team vr "/>
        <div className="texto">
            <p>Soccer team vr</p>
        </div>
        </div>
        <div className="image-container">
        <img src={grid} alt="the grid"/>
        <div className="texto">
            <p>The grid</p>
        </div>
        </div>
        <div className="image-container">
        <img src={above} alt="from uo above"/>
        <div className="texto">
            <p>From up above vr</p>
        </div>
        </div>
        <div className="image-container">
        <img src={pocket} alt="pocket above"/>
        <div className="texto">
            <p>Pocket borealis</p>
        </div>
        </div>
        <div className="image-container">
        <img src={curiosity} alt="the curiosity"/>
        <div className="texto">
            <p>The curiosity</p>
        </div>
        </div>
        <div className="image-container">
        <img src={fisheye} alt="make it fisheye"/>
        <div className="texto">
            <p>Make it fisheye</p>
        </div>
        </div>
      </div>
    </div>
  );
};
