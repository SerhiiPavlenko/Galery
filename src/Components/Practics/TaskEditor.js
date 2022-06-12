import React,{Component} from "react";
import tasksOperation from "../redux/Tasks/tasksOperation";
import {connect} from 'react-redux'

 class TaskEditor extends Component {

    state = {
        text: ''
    }


    handleChange = e => {
        this.setState({
            text: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddTask(this.state.text)
        this.setState({text: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter request <input type='text' value={this.state.text} onChange={this.handleChange}/></label>
                <button type="submit">Add Task</button>
            </form>
        )
    }
    
}
const mapDispatchToProps = {
    onAddTask: tasksOperation.addTask
}

export default connect(null, mapDispatchToProps )(TaskEditor);