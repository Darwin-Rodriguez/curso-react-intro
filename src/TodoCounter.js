function TodoCounter({ completed, total }) {
  return (
    <h1>
      {completed} de {total} tareas completadas
    </h1>
  );
}

export { TodoCounter };
