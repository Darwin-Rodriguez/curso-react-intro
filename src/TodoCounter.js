import "./Estilos/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      {completed === total
        ? `¡Felicidades! Has completado todas tus tareas 🎉🎉.`
        : `Has hecho ${completed} de las ${total} tareas que tienes.`}
    </h1>
  );
}

export { TodoCounter };
