import { Component } from 'react'
import './Filters.css'


export default class Filters extends Component {

  render() {
    const {viewActiveItem, viewAllItem, viewCompletedItem} = this.props

    return (
      <ul className="filters">
        <li>
          <button className="" onClick={() => {viewAllItem()}}>All</button>
        </li>
        <li>
          <button onClick={() => {viewActiveItem()}}>Active</button>
        </li>
        <li>
          <button onClick = {() => {viewCompletedItem()}}>Completed</button>
        </li>
      </ul>
    )
  }
}

