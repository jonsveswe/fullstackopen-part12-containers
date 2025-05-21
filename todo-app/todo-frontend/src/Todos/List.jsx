/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Todo from "./Todo"
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    console.log("delete click", todo)
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    console.log("complete click", todo)
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => {
        return (
          <Todo todo={todo} key={todo._id} onComplete={onClickComplete} onDelete={onClickDelete} />
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
