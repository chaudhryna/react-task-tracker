import React from 'react'
import { FaTrash } from "react-icons/fa";


const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '`'}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTrash style={{ color: 'steelblue', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task