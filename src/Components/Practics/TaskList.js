import React from "react";
import { connect } from "react-redux";
import tasksActions from "../redux/Tasks/tasksActions";

 function TaskList ({tasks,onRemoveTask}) {
    return (
        <ul>
            {tasks.map(({id,text}) => <li key={id}>
               <p>{text}</p>
               <button type="text" onClick={() => onRemoveTask(id)}>Delete</button>
            </li>)}
        </ul>
    )
}

const mapStateToProps = state => ({
    tasks:state.tasks.items.filter(task => task.text.toLowerCase().includes(state.tasks.filter.toLowerCase())),
})

const mapDispatchToProps = {
    onRemoveTask: tasksActions.removeTask
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);