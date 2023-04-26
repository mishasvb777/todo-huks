import './Footer.css'
import TodoCount from'../TodoCount/TodoCount'
import Filters from'../Filters/Filters'
import ClearCompleted from'../ClearCompleted/ClearCompleted'

const Footer = ({doneCount, viewActiveItem, 
                viewAllItem, viewCompletedItem, clearComplited}) => {
  return (
    <footer className ="footer">
      <TodoCount doneCount = {doneCount}/>
      <Filters viewActiveItem = {viewActiveItem}
               viewAllItem = {viewAllItem}
               viewCompletedItem = {viewCompletedItem}
               
      />
      <ClearCompleted clearComplited = {clearComplited}/>
    </footer>
  )
}

export default Footer