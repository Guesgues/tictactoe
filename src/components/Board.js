import "./Board.css";
import Square from "./Square";

function Board(props) {
  const { winner, squares, onClick, onRestart } = props;
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="status">{winner}</div>
      <div className="board">
        {squares.map((item, index) => {
          return (
            <Square key={index} value={item} onClick={() => onClick(index)} />
          );
        })}
      </div>

      <button className="restart" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Board;
