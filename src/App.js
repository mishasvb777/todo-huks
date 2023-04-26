import './App.css';
import { formatDistanceToNow } from 'date-fns'
import AppHeader from './components/AppHeader/AppHeader'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Footer from './components/Footer/Footer'
import { Component } from 'react';

//КОМПОНЕНТЫ КЛАССЫ используются у тех компонентов которые должны иметь состояние, 
// кнопки, todoListItem - является ли она важной, завершенной, и тд, 

export default class App extends Component {
  maxId = 100;
  date = new Date().getTime();

  state = {    
    flag : '',
    todoData : [],
    activeItems : [],
    completedItems : []     
  }

  changeStatusTusk = (id) => {
    this.setState(({todoData}) => {  
      const idx = todoData.findIndex((el) => el.id === id)        
      const oldItem = todoData[idx]
      const newItem = {...oldItem, done: !oldItem.done}      
      let newArr = [...todoData.slice(0, idx),
                    newItem, ...todoData.slice(idx + 1)]              
      return{
        todoData: newArr
      }      
    })
  }

  createItem (label, date, edit = false) {
    return {
      label,
      done: false,
      id: this.maxId++,
      date, 
      editing : edit     
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      let newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData : newArr        
      }
    })
  }

  
  addItem = (text, date) => {
    const newItem = this.createItem(text, date)    
    this.setState(({todoData}) => {
      let newArr = [newItem, ...todoData]
      return{
        todoData: newArr
      }  
    })      
  }

  clearComplited = () => {
    this.setState(({todoData}) => {
      const newArr = todoData.filter((el) => el.done === false)
      return {
        todoData : newArr
      }
    })
  }

  viewAllItem = () => {
    this.setState(() => {
      return {
        flag: ''
      } 
    })  
  }

  viewActiveItem = () => {
    this.setState(({todoData})=>{
      const arrActive = todoData.filter((el) => el.done === false) 
      return {
        activeItems: arrActive,
        flag: 'active'
      }
    })
  }

  viewCompletedItem = () => {
    this.setState(({todoData})=>{
      const arrCompleted = todoData.filter((el) => el.done === true)       
      return {
        completedItems: arrCompleted,
        flag: 'completed'
      }
    })
  }  

  editItem = (id) => {
    this.setState(({todoData}) => {
      const newArr = todoData
      const idx = todoData.findIndex((el) => el.id === id)
      const newItem = Object.defineProperty(todoData[idx], "editing",  {value : true}); 
      newArr.splice(idx, 1, newItem)            
      return {
        todoData : newArr      
      }
    })    
  }


  onKeyDown = (event) => {    
    if(event.key === "Enter"){      
      const newItem2 = event.target.value      
      this.setState(({todoData}) => {
        const newArr = todoData
        const idx = todoData.findIndex((el) => el.id === Number(event.target.id))
        let newItem = Object.defineProperty(todoData[idx], "label", {value: newItem2});
        newItem = Object.defineProperty(todoData[idx], "editing",  {value : false});
        newArr.splice(idx, 1, newItem)            
        return {
          todoData : newArr      
        }
      })        
    } 
  }  

  render() {         
    const {todoData, activeItems, completedItems} = this.state        
    let timeCreate = formatDistanceToNow(this.date, { includeSeconds: true })
    const doneCount = todoData.filter((el) => !el.done).length
    
    let renderItems = todoData;

    if(this.state.flag === 'active'){
      renderItems = activeItems
    } 
    
    if(this.state.flag === 'completed'){
      renderItems = completedItems
    }
    
    return (
      <div className="todoapp">        
      <AppHeader />
      <AddTodo  addItem = {this.addItem}/>
      <TodoList todos = {renderItems} 
                changeStatusTusk = {this.changeStatusTusk}
                deleteItem = {this.deleteItem}
                date = {timeCreate}                
                createDateTask = {this.createDateTask}
                done = {this.done}
                editItem = {this.editItem}
                onKeyDown = {this.onKeyDown}
                onChangeInput = {this.onChangeInput}                
                />
      <Footer doneCount = {doneCount}
              viewAllItem = {this.viewAllItem}
              viewActiveItem = {this.viewActiveItem}
              viewCompletedItem = {this.viewCompletedItem}
              clearComplited = {this.clearComplited}
      />         
    </div>
    )
  }
}

/*
const App2 = () => {   
 
  return (
    <div className="todoapp">        
      <AppHeader />
      <AddTodo />
      <TodoList todos = {todoData}/>
      <Footer />         
    </div>
  );
}

export default App;
*/