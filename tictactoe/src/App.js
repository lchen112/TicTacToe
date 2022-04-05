import { cloneDeep } from "lodash";
import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { INITIAL_TILE_STATE, WINNING_COMBOS } from "./constants";

function App() {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [tiles, setTiles] = useState([
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
    { entry: null },
  ]);

  const checkIfWon = () => {
    let tempTiles = [...tiles];
    let checkedVals = tempTiles
      .map((t, index) => {
        return t.entry === turn ? index : null;
      })
      .filter((t) => t !== null);
    for (let combo of WINNING_COMBOS) {
      let a = combo[0];
      let b = combo[1];
      let c = combo[2];
      if (
        checkedVals.includes(a) &&
        checkedVals.includes(b) &&
        checkedVals.includes(c)
      ) {
        setWinner(turn);
      }
    }

    let totalEntries = tempTiles.filter((t, index) => {
      return t.entry !== null;
    });
    if (totalEntries.length == 9) {
      setWinner("draw");
    }
  };

  const handleClick = (index) => {
    let tempTiles = [...tiles];
    tempTiles[index].entry = turn;
    setTiles(tempTiles);
    setTurn(turn === "X" ? "O" : "X");
    checkIfWon();
  };

  const handleReset = () => {
    setWinner("");
    setTiles(cloneDeep(INITIAL_TILE_STATE));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets play Tic Tac Toe!</h1>
      </header>
      <section>
        <div className="board-container">
          <Board tiles={tiles} winner={winner} handleClick={handleClick} />
        </div>
        {winner && (
          <div className="victory-message">
            {winner == "draw"
              ? "It is a draw!"
              : `Victory belongs to: ${winner}!`}
          </div>
        )}
        <button className="reset-button" onClick={() => handleReset()}>
          Reset Game
        </button>
      </section>
    </div>
  );
}

export default App;
