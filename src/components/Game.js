import { useMemo, useState } from "react";
import Board from "./Board";
import calculateWinner from "./Winner";

function Game(props) {
  const [xIsNext, setxIsNext] = useState(true);
  const [box, setBox] = useState(Array(9).fill(""));
  const winner = useMemo(() => calculateWinner(box), [xIsNext]);
  let turn;

  const handleClick = (i) => {
    if (calculateWinner(box) || box[i]) {
      return;
    }
    box[i] = xIsNext ? "X" : "O";
    setBox(box);
    setxIsNext(!xIsNext);
  };

  if (winner) {
    turn = winner + " is Winner!";
  } else if (!winner && box.includes("") === false) {
    turn = "Drawn!!!";
  } else {
    turn = (xIsNext ? "X" : "O") + " Play";
  }

  const handleRestart = () => {
    setxIsNext(true);
    setBox(Array(9).fill(""));
  };

  return (
    <Board
      squares={box}
      turn={turn}
      onClick={handleClick}
      onRestart={handleRestart}
    />
  );
}

export default Game;
