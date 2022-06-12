import { act } from "react-dom/test-utils"
import { combineReducers } from "redux"

const initialValue ={
    value:0,
    step:0,
}



const valueReducer = (state = 0, {type,payload}) => {
    switch(type) {
        case 'timer/increment' :
            return state + payload.value

        case 'timer/decrement' :
            return state - payload.value
        
            default: return state
    } 
   
}

const stepReducer = (state = 5, action) => {
    return state
}

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});