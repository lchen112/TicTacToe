import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { WINNING_COMBOS } from "./constants";
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
        return t.entry == turn ? index : null;
      })
      .filter((t) => t !== null);
    console.log({ checkedVals });

    console.log(WINNING_COMBOS.includes(checkedVals));
    return WINNING_COMBOS.includes(checkedVals);
  };

  const handleClick = (index) => {
    let tempTiles = [...tiles];
    tempTiles[index].entry = turn;
    setTiles(tempTiles);
    setTurn(turn == "X" ? "O" : "X");
    checkIfWon();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets play Tic Tac Toe!</h1>
      </header>
      <section>
        <div className="board-container">
          <Board tiles={tiles} handleClick={handleClick} />
        </div>
        {winner && <div>Victory to: {winner}</div>}
      </section>
    </div>
  );
}

export default App;
