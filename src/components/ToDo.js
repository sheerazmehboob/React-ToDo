import React, { useState } from 'react'
import List from './List'
import './ToDo.css'

function ToDo() {

  const [task,setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const textChanged = (e) => {
    setTask(e.target.value);
  }

  const AddTask = () => {
    if(task!=""){
      setTaskList(
        [...taskList,task]
      )
      setTask("")
    }
  }

  return (
    <div className='Main'>
      <div className="Header">
        <h1 className="Logo">ToDo</h1>
      </div>

      <h1 className='MainHeading'>Manage Your Tasks</h1>  
      <div className='NewTask'>
        <input type="text" name="" id="" value={task} onChange={textChanged} />
        <button onClick={AddTask}>Add Task</button>
      </div>   
      
      <div className='List'>
      {taskList.map((text,index) => {
        return(<List key={index} text={text}/>)
      })}
      </div>

    </div>
  )
}

export default ToDo
