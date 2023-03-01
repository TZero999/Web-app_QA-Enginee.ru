/*
Засовывать iframe в React - явно не то, чего от меня хочет Алексей.
К тому же будет проблема со стилями.
Поэтому пока это просто тренировка.
*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: "./welcome.html", theme:"light-theme"};
    }

    render() {
        return (
            <div className="React_Container">
                <div className="menu">
                    <ul>
                    <li><a onClick={() => this.setState( {url: "./page1.html"} )}>Как подготовиться к собеседованию?</a></li>
                    <li><a onClick={() => this.setState( {url: "./page2.html"} )}>Изучаем методологии разработки ПО</a></li>
                    <li><a onClick={() => this.setState( {url: "./page3.html"} )}>Техники тест-дизайна.<br/>Что это и как этим пользоваться?</a></li>
                    </ul>
                </div>

                <div className="reactFrame"> <iframe src={this.state.url} title="Выберите интересующую Вас тему в меню слева"></iframe>
                
                </div>
            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
 Порталы???

Если вы ищете способ контролировать содержимое <iframe>via React де-факто каноническим способом, порталы — это то, что вам нужно.
И как со всеми вещами Portal: как только вы устанавливаете ссылку на существующий и смонтированный узел DOM (в данном случае это будет contentWindow данного )
<iframe> и создаете с ним Portal, его содержимое также считается дочерним по отношению к «родительскому» узлу.

Виртуальный DOM, что означает общую (синтетическую) систему событий, контексты и так далее.
Обратите внимание, что для краткости кода в приведенных ниже примерах используется необязательный оператор цепочки,
который на момент написания этой статьи поддерживается не во всех браузерах.

Ненавижу, блядь, порталы!
*/