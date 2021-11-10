import { Luigi, McQueen, King, Boost } from "./img"

let i = 0
const SLIDE_ELEMENTS = [
  {
    img: Luigi,
    text: "Luigi",
    id: `${(i += 1)}`,
  },

  {
    img: McQueen,
    text: "McQueen",
    id: `${(i += 1)}`,
  },

  {
    img: King,
    text: "McQueen",
    id: `${(i += 1)}`,
  },

  {
    img: Boost,
    text: "Boost",
    id: `${(i += 1)}`,
  },
]

export { SLIDE_ELEMENTS }
