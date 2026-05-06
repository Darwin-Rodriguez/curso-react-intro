import { TodoCounter } from "./TodoCounter";
import "./App.css";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./TodoButton";
import { TodoItem } from "./TodoItem";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Dejar de llorar con la llorona", completed: true },
  { text: "Subir el curso a YouTube", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={9} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
