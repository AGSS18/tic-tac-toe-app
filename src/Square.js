
function Square({value, onClick}) {
  return (
    <button className={`Square ${value === 'X' ? 'Square-blue' : value === 'O' ? 'Square-red' : null}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
