import React from 'react'
import './List.css'

function List(props) {
  return (
    <>
      <ul className='List'>
      {props.list}
      </ul>
    </>
  )
}

export default List
