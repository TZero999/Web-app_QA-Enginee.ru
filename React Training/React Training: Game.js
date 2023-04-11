'use strict'

function winnerDeterm (squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i++ ) {
    const [a, b, c] = winLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  return(
    <button className='square' onClick={props.onClick} >
    {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null)} ],
      XisNextTurn: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber +1);
    const current = history[history.length-1];
    const squares = current.squares.slice();

    if (winnerDeterm(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.XisNextTurn ? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      XisNextTurn: !this.state.XisNextTurn,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      XisNextTurn: (step%2) === 0,
    })
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = winnerDeterm(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Перейти к ходу № ' + move : 'К началу игры';

      /* Здесь добавляем ключ для динамического создания и обновления списка.
      Про ключи можно прочитать в инструкции. */
      return ( <li key = { move }> 
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>)
    });

    let status;

    if (winner) {
//    winnerMessage();
      status = 'Игра окончена на ' + (this.state.stepNumber) +' ходу. \n Поздравляем игрока ' + winner + ' с победой!';
    } else {
      if (history[9] == null ) {
        status = 'Следующим ходит игрок ' + (this.state.XisNextTurn? 'X' : 'O');
      } else {
        status = 'Победила дружба!'
      }
    };



    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="game-status">{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

  /*
  function winnerMessage() {
    let winMessage = document.querySelector('.game-status');
    winMessage.className = 'game-status-win'
    setTimeout( ()=>{ 
      winMessage.className = 'game-status';
    }, 2000);
  }
  */