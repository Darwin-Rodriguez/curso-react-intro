import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoItiem />
      <TodoItiem />
      <TodoItiem />
      <TodoCount completed={2} total={3} />
      <TodoCount completed={8} total={10} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React subnormal
        </a>
      </header>
    </div>
  );
}

function TodoItiem() {
  return (
    <li>
      <br />
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}
function TodoCount(props) {
  return (
    <p>
      {props.completed} de {props.total} tareas completadas
    </p>
  );
}

export default App;
