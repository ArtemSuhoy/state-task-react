import React, { useState } from "react"
import data from "./data"
import "./task9.css"

const Task9 = () => {
  const [selected, setSelected] = useState(null)
  const toggle = i => {
    if (i === selected) {
      return setSelected(false)
    }

    setSelected(i)
  }

  return (
    <div className="Accordion">
      {data.map((item, i) => (
        <div
          style={{
            width: "350px",
            backgroundColor: "#DEB887",
            margin: "10px auto",
            padding: "0 10px 5px",
          }}>
          <div
            style={{ padding: "5px 5px 20px 5px" }}
            onClick={() => toggle(i)}>
            {item.title}
          </div>

          <div
            style={{
              display: `${selected === i ? "block" : "none"}`,
              border: "1px solid #000",
              padding: "0 10px",
            }}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task9
