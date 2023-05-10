import React from 'react'
import './Filters.css'

const Filters = (props) => {
  return (
    <ul className="filters">
      <li>
        <button
          className=""
          onClick={() => {
            props.viewAllItem()
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            props.viewActiveItem()
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            props.viewCompletedItem()
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default Filters
