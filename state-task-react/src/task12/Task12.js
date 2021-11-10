import React, { useState } from "react"
import "./Task12.css"

const Task12 = () => {
  let [value, chooseValue] = useState(false)

  const toggle = i => {
    if (value !== i) {
      return chooseValue(i)
    }
  }

  const renderElements = [...Array(5)].map((item, i) => {
    i += 1
    return (
      <span>
        <a
          href={`#${value}`}
          onClick={() => toggle(i)}
          style={{ color: value == i ? "#000" : "#d33" }}>
          {i}
        </a>
      </span>
    )
  })

  return (
    <div className="Task12">
      <div
        onClick={() => chooseValue((value -= 1))}
        className={value == 1 ? "hide" : "visible"}>
        Prev
      </div>

      {renderElements}

      <div
        onClick={() => chooseValue((value += 1))}
        className={value == renderElements.length ? "hide" : "visible"}>
        Next
      </div>
    </div>
  )
}

export default Task12
