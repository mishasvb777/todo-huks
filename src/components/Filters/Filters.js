import React from 'react'
import './Filters.css'


const Filters = (props) => {

  return(
    <ul className="filters">
      <li>
        <button className="" onClick={() => {props.viewAllItem()}}>All</button>
      </li>
      <li>
        <button onClick={() => {props.viewActiveItem()}}>Active</button>
      </li>
      <li>
        <button onClick = {() => {props.viewCompletedItem()}}>Completed</button>
      </li>
    </ul>
  )
}

export default Filters


// export default class Filters extends Component {

//   render() {
//     const {viewActiveItem, viewAllItem, viewCompletedItem} = this.props

//     return (
//       <ul className="filters">
//         <li>
//           <button className="" onClick={() => {viewAllItem()}}>All</button>
//         </li>
//         <li>
//           <button onClick={() => {viewActiveItem()}}>Active</button>
//         </li>
//         <li>
//           <button onClick = {() => {viewCompletedItem()}}>Completed</button>
//         </li>
//       </ul>
//     )
//   }
// }