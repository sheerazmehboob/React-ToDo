import React from 'react'
import './List.css'

function List(props) {
  return (
    <div className='taskContainer'>
      <li id={props.key} key={props.index}>{props.text}</li>
      <button className='bt-del'>X</button>
    </div>
  )
}

export default List
