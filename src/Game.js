import Board from './Board';
import './Game.css';

function Game() {
  return (
    <div className="Game">
      <div className="game-board">
        <Board />
      </div>  
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>  
    </div>
  );
}

export default Game;
