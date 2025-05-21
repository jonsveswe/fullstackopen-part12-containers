/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Todo from "./Todo"
const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
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
