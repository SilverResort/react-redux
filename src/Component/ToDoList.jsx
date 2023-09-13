import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoModel from './ToDoModel'
import { Dropdown } from 'react-bootstrap'

const ToDoList = () => {
    const list=useSelector((state)=>state.listTasks)
    const [status,setStatus]=useState('All')
  return (
    <div style={{marginTop:'5%'}}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {status}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>setStatus('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={()=>setStatus('Done')}>Done</Dropdown.Item>
            <Dropdown.Item onClick={()=>setStatus('unDone')}>ToDo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {   
            status==='Done'?
            list.filter((el)=>el.isDone===true).map((task)=><ToDoModel task={task} key={task.id}/>)
            :status==='unDone'?
            list.filter((el)=>el.isDone===false).map((task)=><ToDoModel task={task} key={task.id}/>)
            :list
            .map((task)=>
            <ToDoModel task={task} key={task.id}/>)
        }
    </div>
  )
}

export default ToDoList