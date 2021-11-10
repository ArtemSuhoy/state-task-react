import React, { useState } from "react"
import "./Task4.css"

const Task4 = () => {
  const [status, setStatus] = useState(false)

  const redStyle = {
    visibility: `${status ? "hidden" : "visible"} `,
  }
  const blueStyle = {
    visibility: `${status ? "visible" : "hidden"} `,
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={() => (status ? setStatus(false) : setStatus(true))}
        className="redStyle"
        style={redStyle}></div>
      <div
        onClick={() => (status ? setStatus(false) : setStatus(true))}
        className="blueStyle"
        style={blueStyle}></div>
    </div>
  )
}

export default Task4
