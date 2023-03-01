/* React
    Необходимо сделать 1 root-блок и 3 компонента: Первый - "App". Направлен на "сборку", будет являться контейнером для 2-ух других компонентов.
    Второй - "FrameMenu" - список с вариантами для выбора страницы, отображаемой в 3-ем контейнере. Третий - "Frame" - окно со встроенной сторонней страницей 
*/
'use strict'

class ReactMenu extends React.Component {
  render() {
    return (
      <button className="menuItem" onClick = {function() {console.log('Щёлкнул по менюшке'); }}>
        {this.props.value}
      </button>
    );
  }
}

class Frame extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

/*
const e = React.createElement;

class IFRAME extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return ('Здесь должен был быть плавающий фрейм, организованный на React JS...');
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Start'
    );
  }
}

const FrameContainer = document.querySelector('#ExperimentalFrame');
const root = ReactDOM.createRoot(FrameContainer);
root.render(e(IFRAME));
*/


/*

Возможно стоит реализовать меню следующим образом?:

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Алиса" />
      <Welcome name="Базилио" />
      <Welcome name="Буратино" />
    </div>
  );
}
*/