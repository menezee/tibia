import React from "react";
import character from "../../images/outfits/hardcore_back.png";

function Character() {
  return (
    <div className="character flex center column">
      <p>You</p>
      <img src={character} />
    </div>
  );
}

export default Character;
