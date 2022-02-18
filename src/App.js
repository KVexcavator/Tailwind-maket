import {useState} from "react";
import "./App.css";
import Intro from "./components/layouts/intro"

export function App() {
  const ItemsArr = [
    <Intro />,
  ]

  const [active, setActive] = useState(<Intro />)
  return(
    <div className='glob-container'>
      <div className='glob-first'>
        <ol>
          {ItemsArr.map((item,i) =>
            <li
              key={i}
              onClick={() => setActive(item)}
              style={{cursor: "pointer"}}
            >
              {item.type.name}
            </li>
          )}
        </ol>
      </div>
      <div className='glob-second'>{active}</div>
    </div>
  )
}
