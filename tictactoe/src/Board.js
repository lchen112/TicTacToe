import React from "react";
import Tile from "./Tile";
import "./Board.css";
const Board = ({ handleClick, tiles }) => {
  return (
    <div className="board">
      {tiles &&
        tiles.map((t, i) => (
          <Tile key={i} index={i} t={t} handleClick={handleClick} />
        ))}
    </div>
  );
};

export default Board;
