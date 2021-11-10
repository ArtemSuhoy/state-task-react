import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./Task13.css"

const Task13 = ({ maxStars }) => {
  const [value, setValue] = useState(null)

  return (
    <div className="Task13">
      {[...Array(+maxStars)].map((item, i) => {
        let ratingValue = i + 1
        return (
          <label>
            <input
              style={{}}
              type="radio"
              name="Task13"
              value={ratingValue}
              onClick={() => setValue(ratingValue)}
            />
            <FaStar color={ratingValue <= value ? "#FFD700" : "#808080"} />
          </label>
        )
      })}
    </div>
  )
}

export default Task13
