import { createStore, combineReducers } from 'redux';
import timerReducer from './TimerReducer';

const rootReducer = combineReducers({
    timer: timerReducer,
})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store)
export default store; 