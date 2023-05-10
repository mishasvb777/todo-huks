import { formatDistanceToNow } from 'date-fns'
import React, { useState, useEffect } from 'react'
import './TodoListItem.css'

const TodoListItem = (props) => {
  const [secunds, setSecunds] = useState(0)
  const [minuts, setMinuts] = useState(0)
  const [pauseStatus, setPause] = useState(false)

  useEffect(() => {
    if (!pauseStatus) {
      setTimeout(() => tick(), 1000)
    }
  }, [secunds, pauseStatus])

  const tick = () => {
    if (secunds > 58) {
      setMinuts(minuts + 1)
      setSecunds(0)
    }
    if (!pauseStatus && secunds < 59) {
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
      <input
        className="toggle"
        type="checkbox"
        onChange={props.changeStatusTusk}
        checked={props.done}
        onClick={pause}
      />
      <label>
        <span className="title">{props.label}</span>
        <span className="description">
          {!props.done && <button className="icon icon-play" onClick={start} />}
          {!props.done && (
            <button className="icon icon-pause" onClick={pause} />
          )}
          {getPaidTime(minuts)}:{getPaidTime(secunds)}
        </span>
        <span className="description">created {timeCreate2} ago</span>
      </label>
      <button className="icon icon-edit" onClick={props.editItem}></button>
      <button className="icon icon-destroy" onClick={props.deleteItem}></button>
    </div>
  )
}

export default TodoListItem
