import React from "react";
import "./Tile.css";
const Tile = ({ handleClick, t, index }) => {
  return (
    <button
      disabled={t.entry !== null}
      onClick={() => handleClick(index)}
      className="tile"
    >
      {t.entry}
    </button>
  );
};

export default Tile;
