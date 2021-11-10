import React, { useState } from "react"
import "./Task10.css"
const Task10 = () => {
  let [scrollValue, setScrollValue] = useState(null)
  const scrollBar = () => {
    return [...Array(10)].map((item, i) => {
      const value = (i + 1) * 10

      return (
        <>
          <label className="scrollBarElements">
            <input
              type="radio"
              name="scrollBarElements"
              value={`${value}`}
              onClick={() => setScrollValue(value)}
            />
            {value <= scrollValue ? (
              <div className="scrollBarElementsLine"></div>
            ) : (
              false
            )}
          </label>
        </>
      )
    })
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="scrollBar">{scrollBar()}</div>
      <div>
        <button
          className="btn-change-scroll"
          onClick={() =>
            scrollValue < 0
              ? setScrollValue(0 + 10)
              : setScrollValue((scrollValue = +scrollValue + 10))
          }>
          +10%
        </button>
        <button
          className="btn-change-scroll"
          onClick={() =>
            scrollValue > 100
              ? setScrollValue(100 - 10)
              : setScrollValue((scrollValue -= 10))
          }>
          -10%
        </button>
        <input
          style={{ margin: "10px" }}
          placeholder="10...100"
          onInput={event => setScrollValue(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Task10
