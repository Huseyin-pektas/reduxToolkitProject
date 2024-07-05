import { combineReducers } from "redux";
import jobReducer  from "./jobSlice"
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
jobReducer
})

export default configureStore({
   reducer: rootReducer
})