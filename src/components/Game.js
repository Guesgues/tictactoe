import { useMemo, useState } from "react";
import Board from "./Board";

function Game(props) {
  const resetbox = () => {
    return Array(9).fill("");
  };
  const [xIsNext, setxIsNext] = useState(true);
  const [box, setBox] = useState(resetbox);

  const handleClick = (i) => {
    if (calculateWinner(box) || box[i]) {
      return;
    }
    box[i] = xIsNext ? "X" : "O";
    setBox(box);
    setxIsNext(!xIsNext);
  };

  const winner = useMemo(() => {
    let turn;
    if (calculateWinner(box)) {
      return (turn = calculateWinner(box) + " is Winner!");
    } else if (!calculateWinner(box) && box.includes("") === false) {
      return (turn = "Drawn!!!");
    } else {
      return (turn = (xIsNext ? "X" : "O") + " Play");
    }
  }, [xIsNext]);

  const handleRestart = () => {
    setxIsNext(true);
    setBox(resetbox);
  };

  return (
    <Board
      squares={box}
      winner={winner}
      onClick={handleClick}
      onRestart={handleRestart}
    />
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i in lines) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
