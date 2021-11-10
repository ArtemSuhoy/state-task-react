import React from "react"
import { useState } from "react"
import { SLIDE_ELEMENTS } from "./SLIDE_ELEMENTS"
import "./Task3.css"

const Task3 = () => {
  let [slide, setSlider] = useState(1)

  let style = {
    height: "300px",
    display: "none",
  }

  const showImg = () => {
    return SLIDE_ELEMENTS.map(item => {
      item.id == slide
        ? (style = { display: "block", height: "300px" })
        : (style = { display: "none", height: "300px" })
      return <img id={item.id} style={style} src={item.img} alt={item.text} />
    })
  }

  return (
    <div className="flex">
      <div>
        <button
          onClick={() =>
            slide <= 1
              ? setSlider((slide = SLIDE_ELEMENTS.length))
              : setSlider(slide - 1)
          }>
          -
        </button>
      </div>

      <div>{showImg()}</div>

      <div>
        <button
          onClick={() =>
            slide > SLIDE_ELEMENTS.length - 1
              ? setSlider((slide = 1))
              : setSlider(slide + 1)
          }>
          +
        </button>
      </div>
    </div>
  )
}

export default Task3
