// import { combineReducers } from "redux";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "./Tasks/tasksReducer";
import logger from 'redux-logger'


  
const defaultMiddleWare = getDefaultMiddleware();

 
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [...defaultMiddleWare]
})

export default store;  