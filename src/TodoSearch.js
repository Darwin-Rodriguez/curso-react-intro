import "./Estilos/TodoSearch.css";
import React from "react";

function TodoSearch({ searchValue, setSearchValue, todos }) {
  console.log("El usuario esta buscando todo de " + searchValue);

  return (
    <input
      placeholder="Aprender React"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
