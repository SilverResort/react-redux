import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delete_task, done_task, edit_task } from '../JS/Actions'
import "../App.css" 
import {Button,  Form, Modal} from 'react-bootstrap'
// pas besoin de l'importé

const ToDoModel = ({task}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const dispatch =useDispatch()

    const [newDescription,setNewDescription]=useState(task.description)

  return (
    <div>

        <span className={task.isDone ? 'done' : 'unDone'}>{task.description}</span>
        <Button onClick={()=>dispatch(done_task(task.id))}>{task.isDone? "unDone":"Done"}</Button>
        <Button variant="danger" onClick={handleShow}>Delete</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete task</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are deleting this task !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>dispatch(delete_task(task.id))}>
            Delete task
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="secondary" onClick={handleShowEdit}>Edit</Button>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>dispatch(edit_task(task.id, newDescription)) && handleCloseEdit()}>
            Edit task
           </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ToDoModel