

const decrement =  value => {
    return {
    type: 'timer/decrement',
    payload: {
        value,
    }
}
}

const increment = value => {
    return {
        type: 'timer/increment',
        payload: {
            value,
        }
    }
}

const changeStep = step => {
    return {
        type: 'timer/changeStep',
        payload: {
            step,
        }
    }
}


export default {
    increment,decrement,changeStep
}