import { DONE_TASK, DELETE_TASK, ADD_TASK, EDIT_TASK } from "./ActionsTypes";

// Initial State
const initialState={
    listTasks:[
        {id:Math.random(), description: 'Task 1', isDone:false},
        {id:Math.random(), description: 'Task 2', isDone:true},
        {id:Math.random(), description: 'Task 3', isDone:false}
    ]
}


export const todoReducer =(state=initialState,{payload, type}) =>{
    switch (type) {
        case DONE_TASK:
            return {
                ...state, listTasks: state.listTasks.map((el)=>
                el.id === payload ? {...el, isDone: !el.isDone} : el)
            }
        case DELETE_TASK:
        return {
            //fonctionne aussi d'apres Ahmed avec slice
            ...state, listTasks: state.listTasks.filter((el)=>
            el.id !== payload)
        }
        case ADD_TASK:
        return {
            // nous avons spreader le state puis la listTask et on rajoute notre payload au tableau listTask 
            ...state, listTasks:[...state.listTasks,payload]
        }
        case EDIT_TASK:
        return { 
            ...state, listTasks: state.listTasks.map((el)=>
            el.id === payload.id ? {...el, description:payload.newDescription}:el)
        }        
        default:
            return state;
    }
}