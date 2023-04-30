import React, { useState } from 'react'
import './AddTodo.css'


const AddTodo = (props) => {

  const [label, setLabel] = useState('')

  const onChangeInput = (event) => {
    setLabel(event.target.value)
  }

  const onKeyDown = (event) =>  {
    if(event.key === "Enter"){
      const date = new Date().getTime();
      props.addItem(label, date)
      setLabel('')
    } 
  }

  return (
    <input className = "new-todo" placeholder = "What needs to be done?"       
             onChange={onChangeInput} 
             onKeyDown = {onKeyDown}   
             value = {label}          
      />
  )
}

export default AddTodo



// export default class AddTodo extends Component {

//   state = {
//     label: ''    
//   } 

//   onChangeInput = (event) => {
//     this.setState({
//       label: event.target.value
//     })               
//   } 

//   onKeyDown = (event) => {    
//     if(event.key === "Enter"){
//       const date = new Date().getTime();
//       this.props.addItem(this.state.label, date)
//       this.setState({
//         label: ''        
//       })
//     }         
//   }

//   render() {   
//     return (
//       <input className = "new-todo" placeholder = "What needs to be done?"       
//              onChange={this.onChangeInput} 
//              onKeyDown = {this.onKeyDown}   
//              value = {this.state.label}          
//       />
//     )
//   }
// }