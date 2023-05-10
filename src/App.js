import './App.css';
import { formatDistanceToNow } from 'date-fns'
import AppHeader from './components/AppHeader/AppHeader'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Footer from './components/Footer/Footer'
import React, { useState } from 'react';


let maxId = 100;
const date = new Date().getTime();

const App = () => {  

  const [flag, setFlag] = useState('')
  const [todoData, setTodoData] = useState([])
  const [activeItems, setActiveItems] = useState()
  const [completedItems, setComplitedItems] = useState()      

  let timeCreate = formatDistanceToNow(date, { includeSeconds: true })

  const doneCount = todoData.filter((el) => !el.done).length
  
  let renderItems = todoData;

  if(flag === 'active'){
    renderItems = activeItems
  } 
  
  if(flag === 'completed'){
    renderItems = completedItems
  }

  const addItem = (text, date) => {
    const newItem = createItem(text, date)  
    let newArr = [newItem, ...todoData]
    console.log(newArr)
    setTodoData(newArr)      
  }

  const createItem = (label, date, edit = false) => {
    return {
      label,
      done: false,
      id: maxId++,
      date, 
      editing : edit     
    }
  }

  const changeStatusTusk = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)        
    const oldItem = todoData[idx]
    const newItem = {...oldItem, done: !oldItem.done}      
    let newArr = [...todoData.slice(0, idx),
                  newItem, ...todoData.slice(idx + 1)] 
    setTodoData(newArr)
  }

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    let newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    setTodoData(newArr)
  }

  const editItem = (id) => {          
    const idx = todoData.findIndex((el) => el.id === id)   
    const oldItem = todoData[idx] 
    const newItem = {...oldItem, editing: true}
    let newArr = [...todoData.slice(0, idx),
      newItem, ...todoData.slice(idx + 1)]    
    setTodoData(newArr) 
  }

  const onKeyDown = (event) => {    
    if(event.key === "Enter"){      
      const newItem2 = event.target.value       
      const idx = todoData.findIndex((el) => el.id === Number(event.target.id))
      const oldItem = todoData[idx] 
      const newItem = {...oldItem, label: newItem2, editing: false}
      const newArr = [...todoData.slice(0, idx),
        newItem, ...todoData.slice(idx + 1)]
      setTodoData(newArr)        
    } 
  } 

  const viewAllItem = () => {
    setFlag('')  
  }

  const viewActiveItem = () => {    
    const arrActive = todoData.filter((el) => el.done === false) 
    setActiveItems(arrActive )    
    setFlag('active') 
  }

  const viewCompletedItem = () => {    
    const arrCompleted = todoData.filter((el) => el.done === true)       
    setComplitedItems(arrCompleted)
    setFlag('completed')
  } 

  const clearComplited = () => {    
    const newArr = todoData.filter((el) => el.done === false)
    setTodoData(newArr)  
  }

  return(
    <div className="todoapp">        
        <AppHeader />
        <AddTodo  addItem = {addItem}/>
        <TodoList todos = {renderItems} 
                  changeStatusTusk = {changeStatusTusk}
                  deleteItem = {deleteItem}
                  date = {timeCreate}                
                  //createDateTask = {createDateTask}
                  done = {todoData.done}
                  editItem = {editItem}
                  onKeyDown = {onKeyDown}
                  // onChangeInput = {onChangeInput}                
                  />
        <Footer doneCount = {doneCount}
                viewAllItem = {viewAllItem}
                viewActiveItem = {viewActiveItem}
                viewCompletedItem = {viewCompletedItem}
                clearComplited = {clearComplited}
        />         
    </div>
  )
}

export default App


