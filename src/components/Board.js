import "./Board.css";
import Square from "./Square";

function Board(props) {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="status">{props.winner}</div>
      <div className="board">
        {props.squares.map((item, index) => {
          return (
            <Square
              key={index}
              value={item}
              onClick={() => props.onClick(index)}
            />
          );
        })}
      </div>

      <button className="restart" onClick={props.onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Board;
