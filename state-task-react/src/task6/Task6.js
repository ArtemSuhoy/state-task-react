import React, { useState } from "react"
import "./Task6.css"

const Task6 = () => {
  const [value, setValue] = useState(false)
  const styleParagraph = { display: `${value ? "block" : "none"}` }

  return (
    <>
      <p className="task6">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet consectetur adipiscing elit. Vel facilisis volutpat est velit
          egestas. Tincidunt ornare massa eget egestas purus. Rhoncus est
          pellentesque elit ullamcorper dignissim. Blandit massa enim nec dui.
          Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Mus
          mauris vitae ultricies leo. Nec ullamcorper sit amet risus nullam.
          Consequat nisl vel pretium lectus quam. Porttitor leo a diam
          sollicitudin tempor. Lorem ipsum dolor sit amet consectetur adipiscing
          elit duis. Egestas diam in arcu cursus euismod quis viverra nibh.
        </span>

        <span style={styleParagraph}>
          Volutpat diam ut venenatis tellus in metus vulputate eu. Leo a diam
          sollicitudin tempor id eu nisl nunc. Mattis aliquam faucibus purus in
          massa tempor. Lectus urna duis convallis convallis tellus. Lorem ipsum
          dolor sit amet. Eros donec ac odio tempor orci. Cras sed felis eget
          velit aliquet. At tempor commodo ullamcorper a. Lectus arcu bibendum
          at varius vel pharetra vel turpis nunc. Vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt. At ultrices mi
          tempus imperdiet nulla malesuada. Egestas maecenas pharetra convallis
          posuere morbi leo urna. Eu sem integer vitae justo eget magna
          fermentum. Faucibus vitae aliquet nec ullamcorper sit amet risus. Odio
          facilisis mauris sit amet massa vitae. A arcu cursus vitae congue
          mauris rhoncus.
        </span>

        <span style={styleParagraph}>
          Dictum varius duis at consectetur. Dignissim convallis aenean et
          tortor at risus viverra. Vestibulum sed arcu non odio euismod lacinia
          at quis risus. Turpis egestas sed tempus urna. Eleifend mi in nulla
          posuere sollicitudin aliquam ultrices sagittis. Vitae sapien
          pellentesque habitant morbi tristique. Semper quis lectus nulla at
          volutpat diam ut. Cursus eget nunc scelerisque viverra mauris in
          aliquam. Tristique nulla aliquet enim tortor at auctor urna nunc. Quis
          auctor elit sed vulputate mi sit. Faucibus ornare suspendisse sed nisi
          lacus sed viverra tellus.
        </span>

        <span style={styleParagraph}>
          Convallis aenean et tortor at risus. Quis commodo odio aenean sed
          adipiscing diam donec adipiscing tristique. Pellentesque habitant
          morbi tristique senectus et netus et. Leo vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim. Diam maecenas
          ultricies mi eget. At tempor commodo ullamcorper a lacus vestibulum
          sed arcu. In ante metus dictum at tempor commodo ullamcorper a lacus.
          Ut placerat orci nulla pellentesque. Duis at consectetur lorem donec
          massa sapien faucibus. Elementum integer enim neque volutpat ac
          tincidunt vitae semper quis. Ullamcorper malesuada proin libero nunc
          consequat interdum varius sit amet. Non odio euismod lacinia at quis
          risus sed. Non consectetur a erat nam at lectus urna. Adipiscing at in
          tellus integer feugiat scelerisque varius. At varius vel pharetra vel.
          Velit scelerisque in dictum non.
        </span>
      </p>

      <span
        onClick={() => (value ? setValue(false) : setValue(true))}
        style={{ backgroundColor: "#000", color: "#fff", padding: "5px 10px" }}>
        {value ? "Скрыть" : "Показать подробнее"}
      </span>
    </>
  )
}

export default Task6
