import './TodoList.css'
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos, changeStatusTusk, deleteItem, date, createDateTask, timeCreate, 
                    editItem, onKeyDown, onChangeInput}) => {    
  
  //Перебираем todos массив, переданный через пропс, в elements будет массив готовых тудушек
  const elements = todos.map((item) => { 

    const {id, done, editing,  ...itemProps} = item // это делаем для того что бы не 
    //передавать в TodoListItem лишнее свойство id, и done, которое там не используется    
    let liClass = done ? 'completed' : ''   
    
    if (editing) liClass = 'editing'

    return (      
      <li key = {item.id} className = {liClass} >        
        <TodoListItem {...itemProps} 
                      date2 = {date}
                      changeStatusTusk = {() => changeStatusTusk(item.id)}
                      deleteItem = {() => deleteItem(item.id)}
                      createDateTask = {() => createDateTask()}    
                      timeCreate = {date} 
                      done = {done} 
                      editItem = {() => editItem(item.id)}                
        />  
        <input type="text" className="edit" id = {item.id} defaultValue={item.label} 
                      
                      onKeyDown = {onKeyDown}></input>
      </li>      
    )    
  }) 
  
  return (
    <main className = "main">
      <ul className = "todo-list">
        { elements }
      </ul>
    </main>
    
  )
}

export default TodoList;
