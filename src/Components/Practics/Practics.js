import React,{Component} from "react";
import Timer from './Timer'
import StepSelector from "../redux/StepSelector";


const stepOptions = [5,10,15,20,30]


export default class Practics extends Component {




    render() {
        return(
            <>
            <Timer/>
            <StepSelector options={stepOptions}/>
            </>
        )
    }
}