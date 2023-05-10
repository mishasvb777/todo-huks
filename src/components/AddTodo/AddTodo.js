import React, { useState } from 'react'
import './AddTodo.css'

const AddTodo = (props) => {
  const [label, setLabel] = useState('')

  const onChangeInput = (event) => {
    setLabel(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const date = new Date().getTime()
      props.addItem(label, date)
      setLabel('')
    }
  }

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={onChangeInput}
      onKeyDown={onKeyDown}
      value={label}
    />
  )
}

export default AddTodo

