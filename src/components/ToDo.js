import React, { useState } from 'react'
import List from './List'
import './ToDo.css'

function ToDo() {

  const [currentID, setCurrentID] = useState(1)
  var [todo,setTodo] = useState([])
  const list = todo.map(task => <li>{task}</li>)

  const AddTask = (e) => {
    e.preventDefault();
    let x=e.target[0].value;
    if(x!=""){
      setTodo([...todo, x]);
      e.target[0].value="";
    }
  }


  return (
    <div className='Main'>
      <div className="Header">
        <h1 className="Logo">ToDo</h1>
      </div>

      <h1 className='MainHeading'>Manage Your Tasks</h1>

      <form action="" className="NewTask" onSubmit={AddTask}>
        <input type="text" name="" id="" />
        <button>Add Task</button>
      </form>

      <List list={list}/>
    </div>
  )
}

export default ToDo
