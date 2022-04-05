import React from "react";
import "./Tile.css";
const Tile = ({ handleClick, winner, t, index }) => {
  return (
    <button
      disabled={t.entry !== null || winner}
      onClick={() => handleClick(index)}
      className="tile"
    >
      {t?.entry}
    </button>
  );
};

export default Tile;
