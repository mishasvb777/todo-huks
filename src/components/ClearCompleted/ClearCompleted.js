import './ClearCompleted.css'

function ClearCompleted ({clearComplited}) {
  return (
    <button className="clear-completed"
            onClick={() => {clearComplited()}}>
    Clear completed
    </button>
  )
}

export default ClearCompleted;