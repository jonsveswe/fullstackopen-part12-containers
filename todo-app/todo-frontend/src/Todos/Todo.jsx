/* eslint-disable react/prop-types */

const Todo = ({ todo, onDelete, onComplete }) => {

  /*   const clickHandler = () => {
      console.log("clicked")
      onComplete(todo)
    } */

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={() => onDelete(todo)}>Delete</button> {/* Why is this not working, */}
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button onClick={() => onDelete(todo)}>Delete</button> {/* Why is this not working, */}
        <button onClick={onComplete(todo)}>Set as done</button> {/* but this works ????????????????? */}
        {/* <button onClick={() => clickHandler()}>Click me</button> */}
      </span>
    </>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>{todo.text}</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

export default Todo;