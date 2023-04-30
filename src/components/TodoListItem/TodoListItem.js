import { formatDistanceToNow } from 'date-fns'
import React, { useState, useEffect } from 'react'
import './TodoListItem.css'

// export default class TodoListItem extends Component {
//   state = {
//     secunds : 0,
//     minuts : 0,
//     pause: false
//   }

//   componentDidMount () {       
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   tick() {
//     if(this.state.secunds > 58){      
//       this.setState({        
//         secunds: this.state.secunds = -1,
//         minuts: this.state.minuts + 1
//       })
//     }
//     if(!this.state.pause){
//       this.setState({        
//         secunds: this.state.secunds + 1
//       })
//     }    
//   }

//   pause() {
//     this.setState({
//       pause: true
//     })
//   }

//   start() {
//     this.setState({
//       pause: false
//     })
//   }

//   render (){
//     const { label, changeStatusTusk, deleteItem, date, done, editItem } = this.props     
    
//     let timeCreate2 = formatDistanceToNow(date, { includeSeconds: true })     

//     const getPaidTime = (time) => {
//       return time.toString().padStart(2, '0')
//     }

//     return (
//     <div className="view">
//       <input className="toggle" type="checkbox" onChange = { changeStatusTusk } checked = {done} onClick={this.pause.bind(this)}/>
//       <label>
//         <span className="title">{ label }</span>
//         <span className="description">
//           {!done && <button className="icon icon-play" onClick={this.start.bind(this)}/>}
//           {!done && <button className="icon icon-pause" onClick={this.pause.bind(this)}/>}
//           {getPaidTime(this.state.minuts)}:{getPaidTime(this.state.secunds)}
//         </span>
//         <span className="description">created {timeCreate2} ago</span>
//       </label>
//       <button className="icon icon-edit" onClick = {editItem}></button>
//       <button className="icon icon-destroy" onClick={deleteItem}></button>
//     </div>
//     )
//   }
// }


const TodoListItem = (props) => {

  const [secunds, setSecunds] = useState(58)
  const [minuts, setMinuts] = useState(0)
  const [pauseStatus, setPause] = useState(false)

  useEffect(() => {
    if(!pauseStatus){
      setTimeout(
        () => tick(),      
        1000
      )
    }    
  },[secunds, pauseStatus]) 

  const tick = () => {
    if(secunds > 58){         
      setMinuts(minuts + 1)
      setSecunds(0)         
    }
    if(!pauseStatus && secunds < 59){
      setSecunds(secunds + 1)
    }    
  }

  const pause = () => {
    console.log(pauseStatus)
    setPause(true)
  }

  const start = () => {
    setPause(false)
  }

  let timeCreate2 = formatDistanceToNow(props.date, { includeSeconds: true })

  const getPaidTime = (time) => {
    return time.toString().padStart(2, '0')
  }


  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange = {props.changeStatusTusk } checked = {props.done} onClick={pause}/>
      <label>
        <span className="title">{ props.label }</span>
        <span className="description">
          {!props.done && <button className="icon icon-play" onClick={start}/>}
          {!props.done && <button className="icon icon-pause" onClick={pause}/>}
          {getPaidTime(minuts)}:{getPaidTime(secunds)}
        </span>
        <span className="description">created {timeCreate2} ago</span>
      </label>
      <button className="icon icon-edit" onClick = {props.editItem}></button>
      <button className="icon icon-destroy" onClick={props.deleteItem}></button>
    </div>
  )
}

export default TodoListItem
