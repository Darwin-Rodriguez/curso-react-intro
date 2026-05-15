import "./Estilos/TodoList.css";

function TodoList({ children, todos, setTodos }) {
  return <ul className="TodoList">{children}</ul>;
}

export { TodoList };
