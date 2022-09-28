import './App.css';
import {useMemo,useState } from "react";

function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function Board(props) {
  
    // const rendersquare = props.squares.map((item ,index) =>
    //   <Square key={index} 
    //     value={item} onClick={() => props.handleClick(index)} />
    // );
    // console.log("test",props.squares);
    // const rendersquare = (param1, param2) => {
    //   const num1 = props.squares.slice(param1, param2);
    //   return <>
    //     { num1.map((item ,index) => <Square key={index} data={item}  /> )} < />
    // };
    
    // const boardrow = (num1, num2) => {
    //   return (
    //     <div className="board-row">
    //         {rendersquare.slice(num1, num2)}
    //     </div>
    // )};
  
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="status">{props.turn}</div>
        <div className="board">
          {props.squares.map((item, index) => {
            return <Square key={index} value={item} onClick={() => props.handleClick(index)} />
          })}
        </div>
          {/* {boardrow(0, 3)}
          {boardrow(3, 6)}
          {boardrow(6, 9)} */}
        <button className="restart" onClick={props.handleRestart}>Restart Game</button>
        </div>
    );
  }
  
  function Game(props) {
    const [xIsNext, setxIsNext] = useState(true);
    const [box, setBox] = useState(Array(9).fill(""));
    const winner = useMemo(() => calculateWinner(box), [xIsNext]);
    let turn ;
    
    const handleClick = (i) => {
      if (calculateWinner(box) || box[i]) {
        return;
      }
      box[i] = xIsNext ? "X" : "O" ;
      setBox(box) ;
      setxIsNext(!xIsNext) ;
    }

    if (winner) {
      turn = winner + " is Winner!" ;
    }
    else if (!winner && box.includes("") === false) {
      turn = "Drawn!!!" ;
    }
    else {
      turn = (xIsNext ? "X" : "O") + " Play" ;
    }
    
    const handleRestart = () => {
      setxIsNext(true);
      setBox(Array(9).fill(""));
    }
    
  
      return (
        <Board  squares={box} turn={turn} handleClick={handleClick} handleRestart={handleRestart}  />
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



export default Game;
