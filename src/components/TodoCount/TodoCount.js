import './TodoCount.css'

function TodoCount ({doneCount}) {  
  return (
    <span className="todo-count">{doneCount} items left</span>
  )
}

export default TodoCount