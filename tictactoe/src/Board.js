import React from "react";
import Tile from "./Tile";
import "./Board.css";
const Board = ({ handleClick, tiles, winner }) => {
  return (
    <div className="board">
      {tiles &&
        tiles.map((t, i) => (
          <Tile
            key={i}
            index={i}
            t={t}
            handleClick={handleClick}
            winner={winner}
          />
        ))}
    </div>
  );
};

export default Board;
