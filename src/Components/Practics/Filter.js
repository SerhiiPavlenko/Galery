import React from "react";
import { connect } from "react-redux";
import tasksActions from "../redux/Tasks/tasksActions";

const Filter =  ({value,onChangeFilter})  =>  (
   
        <div>
            <label>FILTER <input type='text' value={value} onChange= {e => onChangeFilter(e.target.value)}/></label>
        </div>
    
)

const mapStateToProps = state => ({
    value: state.tasks.filter
})

const mapDispatchToProps = {
    onChangeFilter: tasksActions.changeFilter
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);