import tasksActions from "./tasksActions";
import axios from "axios";

const addTask = text => dispatch => {
    dispatch(tasksActions.addTaskRequest());

    axios.post
    ('http://localhost:2000/tasks',{text})
    .then(response => {
        console.log(response);
        dispatch(tasksActions.addTaskSuccess(response.data))
    }).catch(error => dispatch(tasksActions.addTaskError()))
}

export default {
    addTask
}