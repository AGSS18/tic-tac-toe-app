import { useState } from "react";
import Square from "./Square";

function Board() {
    
    const [value, setValue] = useState({board: Array(9).fill(''), xIsNext: true});
    const status = `Next player: ${value.xIsNext ? 'Player 1' : 'Player 2'}`

    function handleClick(i) {
        const squares = value.board.slice();
        squares[i] = value.xIsNext ? 'X' : 'O';
        setValue({board: squares, xIsNext: !value.xIsNext});
    }

    function calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    }

    return (
      <div className="Board">
        <div className="status">{status}</div>
        <div className="board-square">
            {value.board.map((s, i) => {
                return <Square onClick={() => handleClick(i)} value={value.board[i]} key={i} id={i}/>
            })}
        </div>
      </div>
    );
  }
  
  export default Board;
  