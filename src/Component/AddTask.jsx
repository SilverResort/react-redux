import React, { useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions'

const AddTask = () => {
    const dispatch=useDispatch()
    const [description,setDescription]=useState('')
    const handleAdd=()=>{
      description ? dispatch(add_task({id:Math.random(),description,isDone:false})):alert('cannot add an empty movie')
    }
  return (
    <div>
        <FormControl placeholder='entrez une tache' onChange={(e)=>setDescription(e.target.value)}/>
        <Button onClick={()=>handleAdd()}>Add Task</Button>
    </div>
  )
}

export default AddTask