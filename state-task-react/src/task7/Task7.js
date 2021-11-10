import React, { useState } from "react"
import "./Task7.css"

const Task7 = ({ name }) => {
  const [visible, setVisible] = useState(false)

  const elements = [{ name: "Row" }, { name: "Col" }, { name: "Other" }]

  return (
    <div style={{ padding: "15px 0" }}>
      <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={() => setVisible(!visible)}>
          {" "}
          {name}{" "}
        </button>

        <ul style={{ visibility: `${visible ? "visible" : "hidden"}` }}>
          {elements.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Task7
