
import { createAction } from '@reduxjs/toolkit';


const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess');
const addTaskError = createAction('tasks/addError')



const removeTask = createAction('tasks/remove')
const changeFilter = createAction('tasks/changefilter')



export default { removeTask,changeFilter,addTaskRequest,addTaskSuccess,addTaskError}