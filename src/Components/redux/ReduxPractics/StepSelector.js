import React from "react";
import { connect } from "react-redux";
import TimerActions from "./TimerActions";

const styles = {
    label: {display: 'block', textAlign: 'center'},
    select: { width: 80, font: 'inherit'}
}

const StepSelector = ({options, step, onChangeStep}) => (
    <label style={styles.label}>
        Select change:
        <select style={styles.select} value={step} onChange={e => onChangeStep(e.target.value)}>{options.map(option => (<option key={option} value={option}>{option}</option>))}</select>
    </label>
)


const mapStateToProps = state => {
     return {
         step: state.timer.step 
     }
}

const mapDispatchToProps = {
    onChangeStep: TimerActions.changeStep
}

export default connect(mapStateToProps,mapDispatchToProps)(StepSelector);