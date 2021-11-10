import React, { useState } from "react"
import { MENU_ITEMS } from "./Array"

const Task11 = () => {
  const [link, setLink] = useState(null)

  const selected = href => {
    if (link == href) {
      return null
    }

    return setLink(href)
  }

  const menuElements = () => {
    let elements = MENU_ITEMS
    return elements.map(item => (
      <li style={{ padding: "5px" }}>
        <a
          href={item.href}
          onClick={() => selected(item.href)}
          style={{
            color: `${item.href == link ? "#000" : "#FF4500"}`,
          }}>
          {item.title}
        </a>
      </li>
    ))
  }

  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none" }}>{menuElements()}</ul>
    </div>
  )
}

export default Task11
