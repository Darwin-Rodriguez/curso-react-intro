import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./TodoButton";
import { TodoItem } from "./TodoItem";
import React from "react";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Dejar de llorar con la llorona", completed: true },
//   { text: "Subir el curso a YouTube", completed: false },
// ];

// localStorage.setItem("SabrosoTodo_v1",   JSON.stringify(defaultTodos));
// localStorage.removeItem("Sabrosos-Todos_v1");

function App() {
  const localStorageTodos = localStorage.getItem("SabrosoTodo_v1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("SabrosoTodo_v1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("SabrosoTodo_v1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todos={todos}
      />
      <TodoList todos={todos}>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
