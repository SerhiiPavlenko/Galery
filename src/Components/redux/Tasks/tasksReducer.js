import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import tasksActions from "./tasksActions";

    const onAddTask = (state, action) => [...state, action.payload]
    const onRemoveTask = (state, action) => state.filter(task => task.id !== action.payload)
    const onChangeFilterTask = (state, action) => action.payload

const items = createReducer([], {
    [tasksActions.addTaskSuccess]: onAddTask,
    [tasksActions.removeTask]: onRemoveTask,
    
})


const filter = createReducer('', {
    [tasksActions.changeFilter]: onChangeFilterTask
})


export default combineReducers({
    items,
    filter,
})