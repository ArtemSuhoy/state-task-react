import React, { useState } from "react"
import { Card } from "./Components"
import "./Task8.css"

const Task8 = ({ name }) => {
  const [visible, setVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState(false)
  const [indexVisible, setIndexVisible] = useState(2)

  let cardArray = [...Array(5)].map((item, i) => <Card index={i} />)

  // const elementsDropdown = [ { name: 'Row', type: 'row', payload: <Row/> }, { name: 'Col', type: 'Col', payload: <Col/> }, { name: 'Card', type: 'card', payload: <Card/>} ]

  const elementsDropdown = [{ name: "Row" }, { name: "Col" }, { name: "Card" }]

  const getCard = () => {
    return cardArray.map((item, i) => {
      return i < indexVisible ? (
        <div style={{ margin: "10px auto", width: "285px" }}>
          <div style={{ display: `${cardVisible ? "block" : "none"}` }}>
            {item}
          </div>
        </div>
      ) : (
        false
      )
    })
  }

  return (
    <div style={{ padding: "15px 0", width: "1200px", margin: "0 auto" }}>
      <div className="dropdown">
        <button
          className="dropdownButton"
          onClick={() => {
            setVisible(!visible)
          }}>
          {name}
        </button>

        <ul style={{ visibility: `${visible ? "visible" : "hidden"}` }}>
          <li>Row</li>
          <li>Col</li>
          <li onClick={() => setCardVisible(!cardVisible)}>Card</li>
        </ul>
      </div>

      <div>
        {getCard()}

        <button
          style={{
            display: `${
              cardVisible && !(indexVisible >= cardArray.length)
                ? "block"
                : "none"
            }`,
          }}
          onClick={() => setIndexVisible(indexVisible + 2)}>
          Показать ещё
        </button>
      </div>
    </div>
  )
}

export default Task8
