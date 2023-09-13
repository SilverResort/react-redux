export const done_task =(id) => {
    return {
        type:'DONE_TASK',
        payload: id
    }
}

export const delete_task =(id)=>{
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const add_task =(newTask)=>{
    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}

export const edit_task =(id,newDescription)=>{
    return {
        type: 'EDIT_TASK',
        payload: {id,newDescription}
    }
}