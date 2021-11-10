import React, { useState } from "react"
import "./Task5.css"
const Task5 = ({ max, min }) => {
  const [value, setValue] = useState("")

  const getInputText = () => {
    if (value == 5) {
      return ` Максимальное количество символов: ${max}`
    } else if (value < min) {
      return `Введите минимум ${min} символа`
    }
  }

  return (
    <div className="Task5">
      <input
        id="input"
        onChange={() => {
          setValue(document.getElementById("input").value.length)
        }}
        placeholder="Введите текст"
        maxLength={+max}
      />

      <p>{getInputText()}</p>
    </div>
  )
}

export default Task5
