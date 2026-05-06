function TodoItem(props) {
  return (
    <li>
      <br />
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}
export { TodoItem };
