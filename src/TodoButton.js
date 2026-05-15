import "./Estilos/TodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Button clicked!");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
